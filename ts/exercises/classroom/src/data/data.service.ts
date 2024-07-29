import { faker } from '@faker-js/faker';
import * as fs from 'fs';
import { Student, Subject } from '../model';
import { Person } from '../model/core';

export class DataService {
  private _studentsData: Student[] = [];
  private _subjectsData: Subject[] = [];
  private _peopleData: Person[] = [];

  private readonly _peopleCount = 100;
  private readonly _studentCount = 30;

  private readonly _firstGroupId = faker.string.uuid();
  private readonly _secondGroupId = faker.string.uuid();

  private _seedPeople(): void {
    for (let i = 0, iSize = this._peopleCount; i < iSize; ++i) {
      const person: Person = {
        id: faker.string.uuid(),
        firstName: faker.person.firstName(),
        middleName: faker.person.middleName(),
        lastName: faker.person.lastName(),
        dateOfBirth: faker.date.birthdate(),
      };

      this._peopleData.push(person);
    }

    const peopleDataString = JSON.stringify(this._peopleData);
    fs.writeFileSync('./src/data/people.json', peopleDataString);
  }

  public init(): void {
    this._seedPeople();
  }
}

import { Person } from './types'
import { people } from './people';

function printInfo(params:Person) {
  console.log(`Hello my name is ${params.name} and I live in ${params.addres?.country}`);
}

printInfo(people[0])
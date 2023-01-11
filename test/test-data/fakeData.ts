import { faker } from '@faker-js/faker'; 

export const fakeData = {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    postalCode: faker.finance.account(5),
    password: faker.finance.account(5),
    }
    
import { Manufacturer } from '../models/manufacturer';

const MANUFACTURERS: Manufacturer[] = [
  {
    id: 1,
    name: 'Manufacturer One',
    status: 'Active',
    requiresReview: false,
    user: {
      firstName: 'Jason',
      lastName: 'Smith',
      email: 'jason@example.com',
      telephone: '07554 665 998',
      jobTitle: 'Director',
      isAdminUser: true,
      isGeneralUser: true,
    },
    retirement: null,
    approval: {
      files: [{ name: 'approval.pdf', link: '' }],
      notes: 'approval notes',
    },
  },
  {
    id: 2,
    name: 'Manufacturer Two',
    status: 'Pending',
    requiresReview: true,
    user: {
      firstName: 'John',
      lastName: 'Bill',
      email: 'john@example.com',
      telephone: '07554 665 998',
      jobTitle: 'Director',
      isAdminUser: true,
      isGeneralUser: true,
    },
    retirement: null,
    approval: null,
  },
  {
    id: 3,
    name: 'Manufacturer Three',
    status: 'Pending',
    requiresReview: false,
    user: {
      firstName: 'Timothy',
      lastName: 'Carrot',
      email: 'timothy@example.com',
      telephone: '07554 665 998',
      jobTitle: 'Director',
      isAdminUser: true,
      isGeneralUser: true,
    },
    retirement: null,
    approval: null,
  },
  {
    id: 4,
    name: 'Manufacturer Four',
    status: 'Retired',
    requiresReview: false,
    user: {
      firstName: 'James',
      lastName: 'Brown',
      email: 'james@example.com',
      telephone: '07554 665 998',
      jobTitle: 'Director',
      isAdminUser: true,
      isGeneralUser: true,
    },
    retirement: {
      files: [{ name: 'retirement.pdf', link: '' }],
      notes: 'retirement notes',
    },
    approval: {
      files: [{ name: 'approval.pdf', link: '' }],
      notes: 'approval notes',
    },
  },
];

export { MANUFACTURERS };

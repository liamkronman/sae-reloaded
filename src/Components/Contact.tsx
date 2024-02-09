import React from 'react';

interface ContactInfo {
  name: string;
  role: string;
  email: string;
}

const contacts: ContactInfo[] = [
  {
    name: 'JT Markowitz',
    role: 'President',
    email: 'jtma@mit.edu',
  },
  {
    name: 'Jason Chen',
    role: 'Vice President',
    email: 'jachen25@mit.edu',
  },
  {
    name: 'Sharaf Rashid',
    role: 'Risk Manager',
    email: 'sharafr@mit.edu',
  },
  {
    name: 'Liam Kronman',
    role: 'Rush Chair',
    email: 'lkronman@mit.edu',
  },
  {
    name: 'Nathaniel Felleke',
    role: 'Rush Chair',
    email: 'nfelleke@mit.edu',
  },
];

const ContactCard: React.FC<{ contact: ContactInfo }> = ({ contact }) => (
  <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
    <h3 className="text-lg font-bold text-purple-800">{contact.name}</h3>
    <p className="text-purple-600">{contact.role}</p>
    <a href={`mailto:${contact.email}`} className="text-purple-500 hover:text-purple-700 transition-colors duration-300">{contact.email}</a>
  </div>
);

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center text-purple-800 mb-8">Contact Us</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {contacts.map((contact, index) => (
          <ContactCard key={index} contact={contact} />
        ))}
      </div>
    </div>
  );
};

export default Contact;
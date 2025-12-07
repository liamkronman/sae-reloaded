import React from 'react';

interface ContactInfo {
  name: string;
  role: string;
  email: string;
}

const contacts: ContactInfo[] = [
  {
    name: 'Jonathan Zhao',
    role: 'President',
    email: 'jonzhao@mit.edu',
  },
  {
    name: 'Lance Berkey',
    role: 'Vice President',
    email: 'lwberkey@mit.edu',
  },
  {
    name: 'Abe Schechinger',
    role: 'Risk Manager',
    email: 'abeschec@mit.edu',
  },
  {
    name: 'Eddy Calel',
    role: 'Rush Chair',
    email: 'ecalel10@mit.edu',
  },
  {
    name: 'Aleksander Garbuz',
    role: 'Rush Chair',
    email: 'agarbuz@mit.edu',
  },
  {
    name: 'Addison Spiegel',
    role: 'Rush Chair',
    email: 'spiegel1@mit.edu',
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
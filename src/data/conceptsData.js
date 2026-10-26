export const coreConcepts = [
  {
    id: 'useState',
    title: 'useState',
    shortDesc: 'Store and update input values.',
    badge: 'Hook',
    iconName: 'Database',
    definition:
      'useState is a React Hook that stores form input values so React can control and update them.',
    purpose:
      'Keeps input values in component memory so React can read, display, or clear them anytime.',
    codeSnippet: `const [name, setName] = useState('');

// Input is linked to state
<input
  value={name}
  onChange={(e) => setName(e.target.value)}
/>`,
    explanationLines: [
      {
        line: "const [name, setName] = useState('');",
        explanation: "name holds the value, setName is the function to change it.",
      },
      {
        line: "value={name}",
        explanation: "Sets the input text to match the 'name' state variable.",
      },
      {
        line: "onChange={(e) => setName(e.target.value)}",
        explanation: "Updates 'name' state every time the user types a character.",
      },
    ],
    demoType: 'useState',
  },
  {
    id: 'onChange',
    title: 'onChange',
    shortDesc: 'Update state when the user types.',
    badge: 'Event',
    iconName: 'Edit3',
    definition:
      'onChange is an event that runs every time the user types or deletes text in an input.',
    purpose:
      'Allows you to capture whatever the user typed and immediately save it in state.',
    codeSnippet: `const handleChange = (e) => {
  // e.target.value is the text typed by user
  setText(e.target.value);
};

<input type="text" onChange={handleChange} />`,
    explanationLines: [
      {
        line: "const handleChange = (e) => { ... }",
        explanation: "Function that runs on every keystroke.",
      },
      {
        line: "e.target.value",
        explanation: "Reads the current text inside the input box.",
      },
      {
        line: "setText(e.target.value);",
        explanation: "Saves that new text into your React state.",
      },
    ],
    demoType: 'onChange',
  },
  {
    id: 'onSubmit',
    title: 'onSubmit',
    shortDesc: 'Handle form submission.',
    badge: 'Submit',
    iconName: 'Send',
    definition:
      'onSubmit is an event attached to the <form> element that triggers when the user clicks submit or hits Enter.',
    purpose:
      'Lets your component intercept submission, validate the inputs, and show results.',
    codeSnippet: `const handleSubmit = (e) => {
  e.preventDefault();
  alert('Form submitted with: ' + name);
};

<form onSubmit={handleSubmit}>
  <input value={name} onChange={(e) => setName(e.target.value)} />
  <button type="submit">Submit</button>
</form>`,
    explanationLines: [
      {
        line: "<form onSubmit={handleSubmit}>",
        explanation: "Triggers handleSubmit when the user submits the form.",
      },
      {
        line: "e.preventDefault();",
        explanation: "Stops the page from refreshing.",
      },
      {
        line: '<button type="submit">Submit</button>',
        explanation: "Clicking this button fires the onSubmit event.",
      },
    ],
    demoType: 'onSubmit',
  },
  {
    id: 'managingFormData',
    title: 'Managing Form Data',
    shortDesc: 'Store multiple input values in state.',
    badge: 'State Object',
    iconName: 'Layers',
    definition:
      'Managing multiple form inputs in a single state object instead of creating many separate useState variables.',
    purpose:
      'Keeps your code clean and concise when you have 3 or more fields in a form.',
    codeSnippet: `const [formData, setFormData] = useState({ name: '', email: '' });

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

<input name="name" value={formData.name} onChange={handleChange} />
<input name="email" value={formData.email} onChange={handleChange} />`,
    explanationLines: [
      {
        line: "const [formData, setFormData] = useState({ ... })",
        explanation: "Stores all form fields in one object.",
      },
      {
        line: "...formData",
        explanation: "Copies the existing fields so they are not erased.",
      },
      {
        line: "[e.target.name]: e.target.value",
        explanation: "Updates only the field matching the input's name.",
      },
    ],
    demoType: 'managingFormData',
  },
  {
    id: 'formValidation',
    title: 'Form Validation',
    shortDesc: 'Check required fields, email format, and password length.',
    badge: 'Validation',
    iconName: 'CheckCircle2',
    definition:
      'Checking user input to ensure required fields are filled, emails contain "@", and passwords are long enough.',
    purpose:
      'Prevents empty or invalid data before submitting and helps the user fix mistakes.',
    codeSnippet: `if (!email) {
  setError('Email is required!');
} else if (!email.includes('@')) {
  setError('Email must have an @ symbol!');
} else if (password.length < 6) {
  setError('Password must be at least 6 characters!');
}`,
    explanationLines: [
      {
        line: "if (!email)",
        explanation: "Checks if the email field is empty.",
      },
      {
        line: "!email.includes('@')",
        explanation: "Checks for a basic valid email containing an '@' symbol.",
      },
      {
        line: "password.length < 6",
        explanation: "Checks if the password is at least 6 characters long.",
      },
    ],
    demoType: 'formValidation',
  },
  {
    id: 'eventPreventDefault',
    title: 'event.preventDefault()',
    shortDesc: 'Prevent the browser from reloading the page when a form is submitted.',
    badge: 'SPA Control',
    iconName: 'ShieldAlert',
    definition:
      'A built-in JavaScript method that cancels the browser default action of reloading the page upon form submission.',
    purpose:
      'Prevents losing React state so the user remains on the same page without any flicker.',
    codeSnippet: `const handleSubmit = (e) => {
  // 1. Stop page reload!
  e.preventDefault();

  // 2. Run React logic
  console.log('Page did NOT refresh!');
};`,
    explanationLines: [
      {
        line: "e.preventDefault();",
        explanation: "The key line that stops the browser from refreshing.",
      },
      {
        line: "handleSubmit = (e) => { ... }",
        explanation: "Gets the event object 'e' from form submission.",
      },
    ],
    demoType: 'eventPreventDefault',
  },
];

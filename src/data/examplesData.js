export const interactiveExamples = [
  {
    id: 'simple-input',
    title: 'Example 1: Simple Input Form',
    shortTitle: 'Simple Input',
    badge: 'Beginner',
    description: 'Enter a name in an input field and display it instantly using useState and onChange.',
    definitionAndPurpose: {
      definition:
        'A controlled input in React is an input element whose value is linked to a React state variable.',
      purpose:
        'To see how typing text triggers onChange, updates state, and immediately updates the text on screen.',
      keyTakeaways: [
        'useState stores the input value.',
        'onChange detects when the user types.',
        'The value updates on screen without reloading.',
      ],
    },
    code: `import { useState } from 'react';

function SimpleInput() {
  const [name, setName] = useState('');

  return (
    <div>
      <input
        type="text"
        placeholder="Type name here..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Hello, {name}!</p>
    </div>
  );
}

export default SimpleInput;`,
    explanationLines: [
      {
        line: "const [name, setName] = useState('');",
        description: "Creates a state variable 'name' with an empty string.",
      },
      {
        line: "value={name}",
        description: "Shows the current state value inside the input box.",
      },
      {
        line: "onChange={(e) => setName(e.target.value)}",
        description: "When the user types, updates 'name' with what was typed.",
      },
      {
        line: "<p>Hello, {name}!</p>",
        description: "Displays the name on screen in real time.",
      },
    ],
    expectedOutput: {
      initial: 'Input is empty. Display says: "Start typing above...".',
      duringTyping: 'Typing "Alex" updates the screen instantly to: "Hello, Alex!".',
      afterReset: 'Clicking "Clear Name" resets the input and output back to empty.',
    },
  },
  {
    id: 'registration-form',
    title: 'Example 2: Registration Form',
    shortTitle: 'Registration Form',
    badge: 'Validation',
    description: 'Manage name, email, and password in state, validate fields, and handle submit without reloading.',
    definitionAndPurpose: {
      definition:
        'A form that collects multiple fields into one state object and checks if user input is correct before submitting.',
      purpose:
        'To learn how to manage multiple fields in state, check for empty fields or invalid emails, and prevent page reloads.',
      keyTakeaways: [
        'Store multiple inputs in one state object using { ...formData, [e.target.name]: e.target.value }.',
        'e.preventDefault() stops the page from refreshing.',
        'Show simple error messages if inputs are invalid.',
      ],
    },
    code: `import { useState } from 'react';

function RegisterForm() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Stop page reload

    if (!formData.name || !formData.email || !formData.password) {
      setError('All fields are required!');
      return;
    }
    if (!formData.email.includes('@')) {
      setError('Please enter a valid email!');
      return;
    }
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters!');
      return;
    }

    setError('');
    setSuccess('Registration successful!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
      <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
      <input name="password" type="password" placeholder="Password" value={formData.password} onChange={handleChange} />
      <button type="submit">Register</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
    </form>
  );
}

export default RegisterForm;`,
    explanationLines: [
      {
        line: "const [formData, setFormData] = useState({ name: '', email: '', password: '' });",
        description: "Stores all three form values in a single state object.",
      },
      {
        line: "setFormData({ ...formData, [e.target.name]: e.target.value });",
        description: "Updates the changed input field while keeping the other fields intact.",
      },
      {
        line: "e.preventDefault();",
        description: "Stops the browser from refreshing the entire page on submit.",
      },
      {
        line: "if (!formData.email.includes('@'))",
        description: "Checks if the email contains the '@' symbol.",
      },
      {
        line: "if (formData.password.length < 6)",
        description: "Checks that the password is at least 6 characters long.",
      },
    ],
    expectedOutput: {
      initial: 'Three empty input fields and a Register button.',
      onInvalidSubmit: 'Submitting empty fields displays: "All fields are required!".',
      onWeakPassword: 'Submitting a password under 6 characters displays: "Password must be at least 6 characters!".',
      onValidSubmit: 'Submitting valid details displays: "Registration successful for [Name]!".',
    },
  },
  {
    id: 'login-form',
    title: 'Example 3: Login Form',
    shortTitle: 'Login Form',
    badge: 'Submit & Feedback',
    description: 'Email and password login form showing validation, error/success messages, and no page reload.',
    definitionAndPurpose: {
      definition:
        'A login form that takes user credentials, validates them in JavaScript, and provides instant feedback without reloading.',
      purpose:
        'To demonstrate how React handles form submission smoothly using simple state and e.preventDefault().',
      keyTakeaways: [
        'Keep input values in React state.',
        'Use e.preventDefault() inside onSubmit.',
        'Show user feedback directly on the page.',
      ],
    },
    code: `import { useState } from 'react';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Stop page reload

    if (!email || !password) {
      setIsError(true);
      setMessage('Please enter both email and password!');
      return;
    }
    if (password.length < 6) {
      setIsError(true);
      setMessage('Password must be at least 6 characters!');
      return;
    }

    setIsError(false);
    setMessage('Login successful!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Login</button>
      {message && <p style={{ color: isError ? 'red' : 'green' }}>{message}</p>}
    </form>
  );
}

export default LoginForm;`,
    explanationLines: [
      {
        line: "const [email, setEmail] = useState('');",
        description: "State variable for holding the email input value.",
      },
      {
        line: "e.preventDefault();",
        description: "Stops the default browser reload action.",
      },
      {
        line: "if (!email || !password)",
        description: "Checks if either input field was left blank.",
      },
      {
        line: "if (password.length < 6)",
        description: "Checks if the password is at least 6 characters long.",
      },
      {
        line: "setMessage('Login successful!');",
        description: "Displays the success message on the page without reloading.",
      },
    ],
    expectedOutput: {
      initial: 'Email and Password fields are blank with a Login button.',
      onMissingFields: 'Clicking submit without filling fields displays: "Please enter both email and password!".',
      onShortPassword: 'Typing a short password displays: "Password must be at least 6 characters!".',
      onValidLogin: 'Typing valid credentials displays: "Login successful! Welcome [Email]".',
    },
  },
];

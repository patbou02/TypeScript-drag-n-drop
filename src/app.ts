import { ProjectInput } from './components/project-input.js';
import { ProjectList } from './components/project-list.js';

// Code goes here!
console.log('Running App.js...');

new ProjectInput();
new ProjectList('active');
new ProjectList('finished');
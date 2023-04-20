import { ProjectInput } from './components/project-input';
import { ProjectList } from './components/project-list';

// Code goes here!
console.log('Running App.js...');

new ProjectInput();
new ProjectList('active');
new ProjectList('finished');
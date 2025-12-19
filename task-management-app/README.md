Core requirements
1. Task model
Each task should have:
Title (required, max 100 characters)
Description (optional, max 500 characters)
Category (required): "Work", "Personal", "Shopping", "Health", "Other"
Priority (required): "Low", "Medium", "High", "Urgent"
Due Date (optional): date picker
Status (required): "Todo", "In Progress", "Completed"
Created Date: auto-generated timestamp
ID: unique identifier
2. CRUD operations
Create: Add new tasks with validation
Read: Display all tasks with filtering/sorting
Update: Edit existing tasks (change status, update details)
Delete: Remove tasks with confirmation
3. Features to implement
A. Task list display
Show all tasks in a card/list layout
Display: title, category badge, priority indicator (color-coded), due date, status
Show task count (e.g., "5 tasks, 2 completed")
Empty state when no tasks exist
B. Filtering and sorting
Filter by:
Category (dropdown: All, Work, Personal, etc.)
Priority (dropdown: All, Low, Medium, High, Urgent)
Status (dropdown: All, Todo, In Progress, Completed)
Sort by:
Due Date (ascending/descending)
Priority (High to Low, Low to High)
Created Date (newest first, oldest first)
Title (A-Z, Z-A)
C. Form validation
Title: required, max 100 chars, show character count
Description: optional, max 500 chars, show character count
Category: required, show error if not selected
Priority: required, show error if not selected
Due Date: if provided, must be today or future (no past dates)
Inline error messages with red borders
D. Status management
Quick status toggle: buttons to change status (Todo → In Progress → Completed)
Visual status indicators (colors/icons)
Completed tasks: show strikethrough, different styling
E. Priority indicators
Color-coded badges:
Urgent: Red
High: Orange
Medium: Yellow
Low: Green
F. Due date handling
Show "Overdue" badge if due date passed and status is not "Completed"
Show "Due Today" badge if due date is today
Show "Due in X days" for upcoming tasks
G. Data persistence
Use localStorage to save tasks
Data should persist after page refresh
Create a custom hook: useTaskStorage
Technical requirements
Component structure
Split into separate components:
TaskManager (main container)
TaskForm (add/edit form)
TaskFilter (filters and sorting)
TaskList (display tasks)
TaskCard (individual task card)
TaskStats (optional: show statistics)
React concepts to use
useState for state management
useMemo for filtering/sorting optimization
Custom hooks (useTaskStorage)
Form handling with controlled inputs
Conditional rendering
Event handling
Styling
Use Tailwind CSS
Responsive design (mobile, tablet, desktop)
Hover effects and transitions
Color-coded priority badges
Status indicators
Modern card-based layout
Advanced features (bonus)
Level 1 (easy)
Task statistics: show count by status (e.g., "3 Todo, 2 In Progress, 5 Completed")
Search: text search across title and description
Bulk actions: select multiple tasks and delete/mark complete
Task details modal: click task to see full details
Level 2 (medium)
Drag and drop: reorder tasks by drag and drop
Subtasks: add subtasks to main tasks
Tags: add custom tags to tasks
Task templates: save common tasks as templates
Level 3 (hard)
Dark mode toggle
Export/Import: export tasks to JSON, import from JSON
Task history: show when tasks were created/modified
Recurring tasks: set tasks to repeat daily/weekly/monthly
UI/UX requirements
Form design
Clean, modern form layout
Grid layout (2 columns on desktop, 1 on mobile)
Clear labels with required indicators ()
Real-time validation feedback
Character counters for title/description
Date picker for due date
Task cards
Card-based design with shadows
Hover effects (lift, shadow change)
Color-coded priority borders or badges
Status badges
Action buttons (Edit, Delete, Status Toggle)
Responsive grid (1 col mobile, 2 col tablet, 3 col desktop)
Filter bar
Horizontal layout with clear labels
Styled dropdowns/selects
Active filter indicators
"Clear all filters" button
Empty states
Friendly message when no tasks
Different messages for "no tasks" vs "no tasks match filters"
Call-to-action to create first task
Validation rules
Title
Required
Min 3 characters
Max 100 characters
Error: "Title must be between 3 and 100 characters"
Description
Optional
Max 500 characters
Error: "Description cannot exceed 500 characters"
Category
Required
Must select from dropdown
Error: "Please select a category"
Priority
Required
Must select from dropdown
Error: "Please select a priority"
Due Date
Optional
If provided, cannot be in the past
Error: "Due date cannot be in the past"
Expected deliverables
Working application with all core features
Clean, organized component structure
Responsive design
Form validation with error messages
Data persistence with localStorage
Modern UI with Tailwind CSS
Code comments explaining complex logic
README.md with setup instructions
Success criteria
All CRUD operations work correctly
Filters and sorting work independently and together
Form validation prevents invalid submissions
Data persists after page refresh
UI is responsive and modern
Code is clean and well-organized
Components are properly separated
No console errors
Interview talking points
Be ready to explain:
Why you chose this component structure
How you optimized filtering/sorting with useMemo
Your approach to form validation
How localStorage persistence works
How you handled edge cases (empty states, validation, etc.)
What you would add next (pagination, API integration, etc.)
Estimated time
Core features: 4-6 hours
With bonus features: 8-12 hours
Difficulty level
Same as Employee Management System — good practice for:
React hooks
State management
Form handling
Data filtering/sorting
Component architecture
UI/UX design
Start with the core features, then add bonus features if time allows.
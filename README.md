# Instructions

- npm install then npm start to run project in localhost:3000

## Notes

- Data persits between tabs except for names. Also added when refreshing with localstorage
- Tried out https://react-hook-form.com/ for form validation

## Things I've concidered

- Initially, I used the react context api but felt it was overkill. The main sates are held instead in app.js.
- When mapping, I could have used a unique identifier instead of index (for name and animal component).
- I assumed a list was to be displayed not one entry on tab 2 and 3.
- Instead of {name:'',animal:''} as a data structure, I seperated them. Since the names data doesnt persist it was easier to have two seprate states.

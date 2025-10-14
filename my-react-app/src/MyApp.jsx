// MyApp.jsx - Main app component that nests MyButton
import MyButton from './MyButton'

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}


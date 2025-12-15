// ============================================
// 📚 REACT INTERVIEW PREPARATION GUIDE
// ============================================
// SOLID Principles & Design Patterns
// ============================================

/*
╔═══════════════════════════════════════════════════════════════════╗
║                    🎯 SOLID PRINCIPLES                            ║
╠═══════════════════════════════════════════════════════════════════╣
║                                                                   ║
║  S - Single Responsibility Principle                              ║
║  O - Open/Closed Principle                                        ║
║  L - Liskov Substitution Principle                                ║
║  I - Interface Segregation Principle                              ║
║  D - Dependency Inversion Principle                               ║
║                                                                   ║
╚═══════════════════════════════════════════════════════════════════╝
*/

// ============================================
// 📌 S - SINGLE RESPONSIBILITY PRINCIPLE
// ============================================

/*
DEFINITION:
"One component should have only ONE reason to change"

SIMPLE EXPLANATION:
Each component/function should do ONE job only.

EXAMPLE:
❌ BAD - One component doing everything:
  - Fetching data
  - Calculating data
  - Rendering UI

✅ GOOD - Separate responsibilities:
  - useFetch hook → fetches data
  - useCalculation hook → calculates data
  - Component → renders UI only

WHY IT MATTERS:
  ✅ Easy to understand
  ✅ Easy to test
  ✅ Easy to maintain
  ✅ Reusable code
  ✅ Changes are isolated
*/

// Example:
// ❌ BAD
function ProductListBad() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  
  // Fetching
  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data)
        setLoading(false)
      })
  }, [])
  
  // Calculating
  const totalPrice = products.reduce((sum, p) => sum + p.price, 0)
  
  // Rendering
  return <div>...</div>
}

// ✅ GOOD - Separated
function useFetch(url) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(setData)
      .finally(() => setLoading(false))
  }, [url])
  
  return { data, loading }
}

function useTotal(items) {
  return useMemo(() => 
    items?.reduce((sum, item) => sum + item.price, 0) || 0
  , [items])
}

function ProductListGood() {
  const { data: products, loading } = useFetch('/api/products')
  const total = useTotal(products)
  
  return <div>{/* Render only */}</div>
}


// ============================================
// 📌 O - OPEN/CLOSED PRINCIPLE
// ============================================

/*
DEFINITION:
"Open for extension, closed for modification"

SIMPLE EXPLANATION:
You can add new features WITHOUT changing existing code.

EXAMPLE:
❌ BAD - Modify component for every new button type
✅ GOOD - Add props/className to extend functionality

WHY IT MATTERS:
  ✅ Safe - existing code untouched
  ✅ No risk of breaking features
  ✅ Easy to add features
  ✅ Clean, scalable code
*/

// Example:
// ❌ BAD - Modify for every type
function ButtonBad({ type, children }) {
  if (type === 'primary') return <button className="btn-primary">{children}</button>
  if (type === 'danger') return <button className="btn-danger">{children}</button>
  if (type === 'success') return <button className="btn-success">{children}</button>
  // Need new type? MODIFY this component again!
  return <button>{children}</button>
}

// ✅ GOOD - Open for extension
function Button({ className = '', children, ...props }) {
  return (
    <button className={`btn ${className}`} {...props}>
      {children}
    </button>
  )
}

// Extend without modifying:
// <Button className="btn-primary">Submit</Button>
// <Button className="btn-danger">Delete</Button>
// <Button className="btn-warning">Warning</Button>
// Want new type? Just pass new className - no code change!


// ============================================
// 📌 L - LISKOV SUBSTITUTION PRINCIPLE
// ============================================

/*
DEFINITION:
"Child components should be able to replace parent components without breaking the application"

SIMPLE EXPLANATION:
If B extends A, you can use B anywhere you use A.

EXAMPLE:
  A = Button (parent)
  B = BlueButton (child)
  C = RedButton (child)
  
  Where you use A, you can use B or C - everything still works!

WHY IT MATTERS:
  ✅ Safe component substitution
  ✅ Predictable behavior
  ✅ Better composition
  ✅ Easy refactoring
*/

// Example:
// Parent
function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>
}

// Children - Can replace parent anywhere
function BlueButton({ onClick, children }) {
  return <button onClick={onClick} style={{color: 'blue'}}>{children}</button>
}

function RedButton({ onClick, children }) {
  return <button onClick={onClick} style={{color: 'red'}}>{children}</button>
}

// Usage - All work the same!
// <Button onClick={handle}>Click</Button>
// <BlueButton onClick={handle}>Click</BlueButton>  ✅ Works!
// <RedButton onClick={handle}>Click</RedButton>    ✅ Works!


// ============================================
// 📌 I - INTERFACE SEGREGATION PRINCIPLE
// ============================================

/*
DEFINITION:
"Don't force components to depend on props they don't need"

SIMPLE EXPLANATION:
Pass only the props a component actually uses, not entire objects.

EXAMPLE:
❌ BAD - Pass entire product object (20 fields)
✅ GOOD - Pass only title, price, image (3 fields)

WHY IT MATTERS:
  ✅ Better performance (fewer re-renders)
  ✅ Clear dependencies
  ✅ Easy to test
  ✅ Better reusability
  ✅ Loose coupling
*/

// Example:
// ❌ BAD - Entire object
function ProductCardBad({ product }) {
  // Receives 20+ fields but uses only 3!
  return (
    <div>
      <img src={product.image} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
    </div>
  )
}
// <ProductCardBad product={hugeProductObject} />

// ✅ GOOD - Only what's needed
function ProductCard({ title, price, image }) {
  // Clear! Only needs these 3 props
  return (
    <div>
      <img src={image} />
      <h3>{title}</h3>
      <p>${price}</p>
    </div>
  )
}
// <ProductCard title={p.title} price={p.price} image={p.image} />


// ============================================
// 📌 D - DEPENDENCY INVERSION PRINCIPLE
// ============================================

/*
DEFINITION:
"Depend on abstractions (hooks/interfaces), not concrete implementations (APIs/libraries)"

SIMPLE EXPLANATION:
Use custom hooks instead of directly calling APIs in components.

EXAMPLE:
❌ BAD - Directly use fetch() in every component
✅ GOOD - Create useFetch hook, components use the hook

WHY IT MATTERS:
  ✅ Easy to swap implementations (fetch → axios)
  ✅ Easy to test (mock the hook)
  ✅ Loose coupling
  ✅ Code reuse
  ✅ Flexible and maintainable
*/

// Example:
// ❌ BAD - Direct dependency
function ProductListBad() {
  const [products, setProducts] = useState([])
  
  useEffect(() => {
    // Directly using fetch (concrete implementation)
    fetch('/api/products')
      .then(res => res.json())
      .then(setProducts)
  }, [])
  
  return <div>...</div>
}

// ✅ GOOD - Depend on abstraction
function useFetch(url) {
  const [data, setData] = useState(null)
  
  useEffect(() => {
    fetch(url)  // Implementation hidden in hook
      .then(res => res.json())
      .then(setData)
  }, [url])
  
  return { data }
}

function ProductList() {
  const { data: products } = useFetch('/api/products')  // Abstraction
  return <div>...</div>
}
// Want to switch to axios? Change ONLY the hook, not all components!


/*
╔═══════════════════════════════════════════════════════════════════╗
║                    🎨 DESIGN PATTERNS                             ║
╠═══════════════════════════════════════════════════════════════════╣
║                                                                   ║
║  Memory Trick: "CHOPS your PC with CORNS from SF"                ║
║                                                                   ║
║  🪓 CHOP:                                                          ║
║     C - Custom Hooks                                              ║
║     H - HOC (Higher Order Component)                              ║
║     O - Observer                                                  ║
║     P - Provider                                                  ║
║                                                                   ║
║  💻 PC:                                                            ║
║     P - Presentational/Container                                  ║
║     C - Composition                                               ║
║                                                                   ║
║  🌽 CORN:                                                          ║
║     C - Compound Components                                       ║
║     O - Controlled/Uncontrolled                                   ║
║     R - Render Props                                              ║
║     N - Singleton                                                 ║
║                                                                   ║
║  🌉 SF:                                                            ║
║     S - Strategy                                                  ║
║     F - Factory                                                   ║
║                                                                   ║
╚═══════════════════════════════════════════════════════════════════╝
*/


// ============================================
// 📌 1. CUSTOM HOOKS PATTERN
// ============================================

/*
WHAT: Extract reusable logic into hooks

WHEN TO USE:
  - Logic is used in multiple components
  - Complex state management
  - Side effects need reuse

BENEFITS:
  ✅ Code reuse
  ✅ Clean components
  ✅ Easy to test
  ✅ Single Responsibility
*/

// Example:
function useFetch(url) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false))
  }, [url])
  
  return { data, loading, error }
}

// Usage in any component:
function Products() {
  const { data, loading } = useFetch('/api/products')
  // ...
}


// ============================================
// 📌 2. HOC (Higher Order Component) PATTERN
// ============================================

/*
WHAT: Wrap a component to add extra features

WHEN TO USE:
  - Add common functionality to multiple components
  - Authentication checks
  - Logging, analytics

BENEFITS:
  ✅ Code reuse
  ✅ Enhance without modifying
  ✅ Composition
*/

// Example:
function withAuth(Component) {
  return function AuthComponent(props) {
    const isAuthenticated = true // check auth
    
    if (!isAuthenticated) {
      return <div>Please login</div>
    }
    
    return <Component {...props} />
  }
}

// Usage:
const ProtectedProfile = withAuth(ProfilePage)
// <ProtectedProfile /> - Only renders if authenticated


// ============================================
// 📌 3. OBSERVER PATTERN
// ============================================

/*
WHAT: Subscribe to events, get notified when they happen

WHEN TO USE:
  - State management (Redux)
  - Event listeners
  - Real-time updates

BENEFITS:
  ✅ Loose coupling
  ✅ Reactive updates
  ✅ Scalable
*/

// Example: Redux (Observer pattern)
// Components subscribe to store
// When store changes, components get notified and re-render

// useSelector - subscribes to store
function Cart() {
  const items = useSelector(state => state.cart.items)  // Observer!
  // When cart changes, this component re-renders
  return <div>{items.length} items</div>
}


// ============================================
// 📌 4. PROVIDER PATTERN
// ============================================

/*
WHAT: Share data across many components without prop drilling

WHEN TO USE:
  - Global state (theme, auth, language)
  - Avoid prop drilling
  - Context API, Redux

BENEFITS:
  ✅ No prop drilling
  ✅ Centralized state
  ✅ Easy access
*/

// Example:
const ThemeContext = createContext()

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light')
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

// Any child can access theme
function Button() {
  const { theme } = useContext(ThemeContext)
  return <button className={theme}>Click</button>
}


// ============================================
// 📌 5. PRESENTATIONAL/CONTAINER PATTERN
// ============================================

/*
WHAT: Separate logic from UI

CONTAINER (Smart): Logic, state, data fetching
PRESENTATIONAL (Dumb): Only UI, receives props

WHEN TO USE:
  - Complex components
  - Reusable UI components
  - Testing

BENEFITS:
  ✅ Separation of concerns
  ✅ Reusable UI
  ✅ Easy to test
*/

// Example:
// Container (Smart) - has logic
function ProductsContainer() {
  const { data: products, loading } = useFetch('/api/products')
  const [search, setSearch] = useState('')
  
  const filtered = products?.filter(p => 
    p.title.includes(search)
  )
  
  return (
    <ProductsView 
      products={filtered}
      search={search}
      onSearchChange={setSearch}
      loading={loading}
    />
  )
}

// Presentational (Dumb) - only UI
function ProductsView({ products, search, onSearchChange, loading }) {
  return (
    <div>
      <input value={search} onChange={e => onSearchChange(e.target.value)} />
      {loading ? 'Loading...' : products.map(p => <div>{p.title}</div>)}
    </div>
  )
}


// ============================================
// 📌 6. COMPOSITION PATTERN
// ============================================

/*
WHAT: Build complex components by combining simpler ones

WHEN TO USE:
  - Reusable building blocks
  - Flexible layouts
  - Component libraries

BENEFITS:
  ✅ Reusability
  ✅ Flexibility
  ✅ Maintainability
  ✅ Like LEGO blocks!
*/

// Example:
function Card({ children }) {
  return <div className="card">{children}</div>
}

function Avatar({ src }) {
  return <img src={src} className="avatar" />
}

function UserName({ name }) {
  return <h3>{name}</h3>
}

// Compose them!
function UserCard({ user }) {
  return (
    <Card>
      <Avatar src={user.avatar} />
      <UserName name={user.name} />
    </Card>
  )
}


// ============================================
// 📌 7. COMPOUND COMPONENTS PATTERN
// ============================================

/*
WHAT: Components that work together (like a family)

WHEN TO USE:
  - Select + Options
  - Tabs + Tab
  - Menu + MenuItem

BENEFITS:
  ✅ Flexible API
  ✅ Intuitive
  ✅ Share state internally
*/

// Example:
function Select({ children }) {
  const [selected, setSelected] = useState(null)
  
  return (
    <div>
      {React.Children.map(children, child =>
        React.cloneElement(child, { selected, setSelected })
      )}
    </div>
  )
}

function Option({ value, selected, setSelected, children }) {
  return (
    <div 
      onClick={() => setSelected(value)}
      style={{ fontWeight: selected === value ? 'bold' : 'normal' }}
    >
      {children}
    </div>
  )
}

// Usage - intuitive!
// <Select>
//   <Option value="1">Option 1</Option>
//   <Option value="2">Option 2</Option>
// </Select>


// ============================================
// 📌 8. CONTROLLED/UNCONTROLLED PATTERN
// ============================================

/*
WHAT: Who controls the component state?

CONTROLLED: React state controls it
UNCONTROLLED: DOM controls it (use ref)

WHEN TO USE:
  CONTROLLED - When you need control, validation
  UNCONTROLLED - Simple forms, performance

BENEFITS:
  Controlled: ✅ Full control, validation
  Uncontrolled: ✅ Simple, performant
*/

// Controlled
function ControlledInput() {
  const [value, setValue] = useState('')
  
  return (
    <input 
      value={value} 
      onChange={e => setValue(e.target.value)} 
    />
  )
}

// Uncontrolled
function UncontrolledInput() {
  const inputRef = useRef()
  
  const handleSubmit = () => {
    console.log(inputRef.current.value)
  }
  
  return <input ref={inputRef} />
}


// ============================================
// 📌 9. RENDER PROPS PATTERN
// ============================================

/*
WHAT: Pass a function as a prop to share logic

WHEN TO USE:
  - Share logic between components
  - Flexible rendering
  - Component libraries

BENEFITS:
  ✅ Flexible
  ✅ Share logic
  ✅ Custom rendering
*/

// Example:
function DataFetcher({ url, render }) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(setData)
      .finally(() => setLoading(false))
  }, [url])
  
  return render({ data, loading })
}

// Usage - flexible rendering!
// <DataFetcher 
//   url="/api/products"
//   render={({ data, loading }) => (
//     loading ? <Spinner /> : <ProductList products={data} />
//   )}
// />


// ============================================
// 📌 10. SINGLETON PATTERN
// ============================================

/*
WHAT: Only ONE instance exists (shared globally)

WHEN TO USE:
  - Redux store (one store for entire app)
  - API client (one instance)
  - Configuration

BENEFITS:
  ✅ Shared state
  ✅ Consistency
  ✅ Memory efficient
*/

// Example:
// Redux Store - Singleton
const store = configureStore({
  reducer: {
    cart: cartReducer
  }
})
// Only ONE store exists, shared by all components


// ============================================
// 📌 11. STRATEGY PATTERN
// ============================================

/*
WHAT: Different ways to do the same thing, switch between them

WHEN TO USE:
  - Payment methods
  - Sorting algorithms
  - Authentication methods

BENEFITS:
  ✅ Flexible
  ✅ Easy to add strategies
  ✅ Open/Closed principle
*/

// Example:
const sortStrategies = {
  byPrice: (a, b) => a.price - b.price,
  byName: (a, b) => a.name.localeCompare(b.name),
  byDate: (a, b) => new Date(a.date) - new Date(b.date)
}

function ProductList({ products, sortBy }) {
  const sorted = [...products].sort(sortStrategies[sortBy])
  
  return sorted.map(p => <div>{p.name}</div>)
}


// ============================================
// 📌 12. FACTORY PATTERN
// ============================================

/*
WHAT: Function that creates components based on conditions

WHEN TO USE:
  - Create different components based on type
  - Dynamic component creation
  - Centralized creation logic

BENEFITS:
  ✅ Centralized logic
  ✅ Easy to extend
  ✅ DRY principle
*/

// Example:
function createButton(type) {
  const buttons = {
    primary: () => <button className="btn-primary">Primary</button>,
    danger: () => <button className="btn-danger">Danger</button>,
    success: () => <button className="btn-success">Success</button>
  }
  
  return buttons[type] ? buttons[type]() : <button>Default</button>
}

// Usage:
function App() {
  return (
    <div>
      {createButton('primary')}
      {createButton('danger')}
    </div>
  )
}


/*
╔═══════════════════════════════════════════════════════════════════╗
║                    🎯 INTERVIEW QUICK REFERENCE                   ║
╠═══════════════════════════════════════════════════════════════════╣
║                                                                   ║
║  SOLID PRINCIPLES:                                                ║
║  ----------------------------------------------------------       ║
║  S - One component = one job                                      ║
║  O - Extend with props, don't modify code                         ║
║  L - Child can replace parent anywhere                            ║
║  I - Pass only needed props, not entire objects                   ║
║  D - Use custom hooks instead of direct APIs                      ║
║                                                                   ║
║  DESIGN PATTERNS:                                                 ║
║  ----------------------------------------------------------       ║
║  "CHOPS your PC with CORNS from SF"                               ║
║                                                                   ║
║  Custom Hooks - Extract reusable logic                            ║
║  HOC - Wrap component to add features                             ║
║  Observer - Subscribe to changes                                  ║
║  Provider - Share data without prop drilling                      ║
║  Presentational/Container - Separate logic from UI                ║
║  Composition - Build from smaller components                      ║
║  Compound - Components that work together                         ║
║  Controlled/Uncontrolled - Who controls state?                    ║
║  Render Props - Pass function for rendering                       ║
║  Singleton - One instance shared globally                         ║
║  Strategy - Different ways to do same thing                       ║
║  Factory - Create components based on input                       ║
║                                                                   ║
╚═══════════════════════════════════════════════════════════════════╝
*/

/*
🎉 CONGRATULATIONS! 🎉

You now have a complete reference for:
✅ 5 SOLID Principles
✅ 12 Design Patterns
✅ Real code examples
✅ Interview explanations

Keep this file handy during interview prep!
Review it regularly to stay sharp!

Good luck with your interviews! 🚀
*/


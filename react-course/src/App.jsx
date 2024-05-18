import Header from './components/Header'
import ContactList from './components/ContactList'
import ContactCard from './components/ContactCard'
import Contact from './components/Contact'
import AddContact from './components/AddContact'

const App = () => {
  return (
    <>
      <Header />
      <AddContact />
      <ContactList />
      <ContactCard />
      <Contact />
    </>
  )
}

export default App
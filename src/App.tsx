import Header from './components/Header'
import Produtos from './containers/Produtos'

import { GlobalStyle } from './styles'
import { Provider } from 'react-redux'
import { store } from './store'
import { useGetProdutosQuery } from './services/api'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function AppContent() {
  const { data: produtos, isLoading } = useGetProdutosQuery()

  if (isLoading) return <h2>Carregando...</h2>

  return (
    <div className="container">
      <Header />
      <Produtos produtos={produtos || []} />
    </div>
  )
}

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <AppContent />
    </Provider>
  )
}

export default App

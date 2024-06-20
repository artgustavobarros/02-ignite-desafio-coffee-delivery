import { Card } from '../../components/Card'
import { Brand } from '../../components/Hero'
import { Catalog, Content, HomeContainer } from './styles'
import { coffees } from '../../../data.json'

export function Home() {
  return (
    <HomeContainer>
      <Brand />
      <Content>
        <h1>Nossos cafés</h1>
        <Catalog>
          {coffees &&
            coffees.map((data) => <Card key={data.name} data={data} />)}
        </Catalog>
      </Content>
    </HomeContainer>
  )
}

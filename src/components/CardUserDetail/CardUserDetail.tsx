import { IAddress, ICompany, IUser } from '../../domain/User'

export interface ICardUserDetail {
  user: IUser
}
interface IPersonalData {
  id: number
  name: string
  username: string
  email: string
}

const PersonalData = (props: IPersonalData) => {
  const { id, name, username, email } = props
  return (
    <div>
      ID: {id}
      Nombre:{name}
      Username: {username}
      Email: {email}
    </div>
  )
}
interface IAddressProps {
  address: IAddress
}
const Address = (props: IAddressProps) => {
  const { address } = props
  return (
    <div>
      {address.street}
      {address.suite}
      {address.city}
      {address.zipcode}
      Geo: {address.geo.lat}, {address.geo.lng}
    </div>
  )
}
interface ICompanyProps {
  company: ICompany
}
const Company = (props: ICompanyProps) => {
  const { company } = props
  return (
    <div>
      Nombre: {company.name}
      Frase: {company.catchPhrase}
      BS: {company.bs}
    </div>
  )
}

const CardUserDetail = (props: ICardUserDetail) => {
  const { user } = props
  return (
    <div style={{border: '1px solid white'}}>
      Detalles del usuario:
      <PersonalData id={user.id} name={user.name} username={user.username} email={user.email} />
      <Address address={user.address} />
      Tel: {user.phone}
      Web: {user.website}:
      <Company company={user.company} />
    </div>
  )
}
export default CardUserDetail

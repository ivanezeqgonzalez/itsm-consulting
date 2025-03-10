import { IAddress, ICompany, IUser } from '../../domain/User'
import styles from './CardUserDetail.module.css'
export interface ICardUserDetail {
  user: IUser
}
interface IPersonalData {
  user: IUser
}

const PersonalData = (props: IPersonalData) => {
  const { id, name, username, email } = props.user
  return (
    <div className={styles.containerPersonalData}>
      <p>
        <b>ID: </b>
        {id}
      </p>
      <p>
        <b>Nombre: </b> {name}
      </p>
      <p>
        <b>Username:</b> {username}
      </p>
      <p>
        <b>Email:</b> {email}
      </p>
    </div>
  )
}
interface IAddressProps {
  address: IAddress
}
const Address = (props: IAddressProps) => {
  const { address } = props
  return (
    <div className={styles.containerAddress}>
      <p>
        <b>Address: </b>
        {address.street}, {address.suite}, {address.city}, {address.zipcode}.
      </p>
      <p>
        <b>Geo: </b>
        {address.geo.lat}, {address.geo.lng}
      </p>
    </div>
  )
}
interface ICompanyProps {
  company: ICompany
}
const Company = (props: ICompanyProps) => {
  const { company } = props
  return (
    <div className={styles.containerCompany}>
      <p>
        <b>Nombre: </b> {company.name}
      </p>
      <p>
        <b>Frase: </b> {company.catchPhrase}
      </p>
      <p>
        <b>BS: </b> {company.bs}
      </p>
    </div>
  )
}
interface IContactProps {
  phone: string
  website: string
}
const Contact = (props: IContactProps) => {
  const { phone, website } = props
  return (
    <div className={styles.containerContact}>
      <p>
        <b>Tel: </b>
        {phone}
      </p>
      <p>
        <b>Web: </b>
        {website}
      </p>
    </div>
  )
}

const CardUserDetail = (props: ICardUserDetail) => {
  const { user } = props
  return (
    <div className={styles.container}>
      <div className={styles.containerPersonalDataAndContact}>
        <PersonalData user={user} /> | <Contact phone={user.phone} website={user.website} />
      </div>
      <Address address={user.address} />
      <Company company={user.company} />
    </div>
  )
}
export default CardUserDetail

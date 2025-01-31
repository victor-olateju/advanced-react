import cls from "./style.module.scss"

const Button = ({children, backgroundColor}) => {
    const _type = {
        primary: {

        }
    }
    return <button className={backgroundColor}>{children}</button>
}

const Alert = ({children}) => <div className="">
    <div className="overlay" />
    <div className="alert">{children}</div>
</div>

//Specialization
const DeleteButton = ({}) => <Button className="danger">
    Delete
</Button>


export const ContSpec = () => {

    return <div className={cls.contspec}>
        <header>Little Lemon Restaurant </header>
        <Alert>
            <h4>Delete Account</h4>
            <p>Are you sure?</p>
        </Alert>
        <DeleteButton />
    </div>
}
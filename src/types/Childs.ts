export interface ChildProps {
    username: string
    password: string
}
export interface FormProps {
    getData: (
        username: string,
        password: string
    ) => void
}
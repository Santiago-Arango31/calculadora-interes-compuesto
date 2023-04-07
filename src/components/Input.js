import styled from 'styled-components'
import { useField } from 'formik'

const Control = styled.div`
    margin-bottom:20px
    `
const Label = styled.label`
    color:#000;
    display:block;
    margin-bottom:5px
    `
const _Input = styled.input`
    outline:none;
    padding: 8px;
    border: solid 1px #b1b3b5;
    border-radius: 4px;
    width: 100%;
    margin-bottom: 5px
    `

const ErrorMessage = styled.div`
    color:#f00
    `
const Input = ({ label, ...props }) => {
    const [field, meta] = useField(props)
    return (
        <Control>
            <Label>{label}</Label>
            <_Input {...field} {...props}></_Input>
            {meta.touched && meta.error ? <ErrorMessage> {meta.error}</ErrorMessage> : null}
        </Control>
    )
}

export default Input
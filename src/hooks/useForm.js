import {useState} from 'react'

const useForm = (initialState) => {
    const [form, setForm] = useState(initialState)

    const handLeInputChance = (event)=> {
        const {value,name} = event.target
        setForm ({...form,[name]: value})
    }

    return [form, handLeInputChance]
}

export default useForm
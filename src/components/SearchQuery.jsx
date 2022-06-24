import './SearchQuery.css'
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

class Search extends React.Component {
    constructor(props) {
        console.log(props)
        super(props);
        this.state = {query: props.query, lista: props.lista};
        this.props = props.lista
    }

    filteredList() {
        let tmp = []
        for (let word of this.state.lista) {
            if (word.includes(this.state.query))
                tmp.push(word)
        }
        return tmp
    }
    render() {
        return (
            <React.Fragment>
            <h1>Filtered list</h1>
            <h2>{this.filteredList()}</h2>
            </React.Fragment>
        )
    }
}

export function filteredList(value) {
    let lista = ["Ciao", "amici", "come", "va?"]
    let filtered = []
    for (let word of lista) {
        if (word.includes(value))
            filtered.push(`${word} `)
    }
    return filtered
}

export default function SearchQuery() {
    const [search, setSearch] = useState('')

    function InputDeclare(e) {
        setSearch(e.target.value)
    }

    return (
        <div className="mysearchdiv h-50 d-flex justify-content-center">
            <input className="mysearchbar w-25 form-control shadow-none" onChange={InputDeclare} placeholder="Search"></input>
            <h2 className='text-white'>{filteredList(search)}</h2>
        </div>
    )
}

// creare una semplice funzionalità di filtro di ricerca per visualizzare un elenco filtrato in base alla query di ricerca immessa dall'utente.
// Di seguito sono riportati i passaggi per creare un filtro di ricerca utilizzando React JS:
// 1 - Dichiara gli stati di react per i valori di input della ricerca.
// 2 - Crea testo di input HTML per inserire il termine di ricerca e aggiornare lo stato nella funzione onChange.
// 3 - Aggiungi Array.filter() all'elenco di elementi con il valore del termine di ricerca.
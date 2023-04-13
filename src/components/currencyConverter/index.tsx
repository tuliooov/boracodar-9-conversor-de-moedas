"use client"

import { useContext } from 'react'

import Image from 'next/image'

import styles from './styles.module.scss'

import currencies from '../../../datas/currencies.json'

import { CurrenciesContext } from '@/contexts/CurrenciesContext'

export function CurrencyConverter() {

    const {
        handleChangeCurrencyInput,
        firstCurrencyValue,
        secondCurrencyValue,
        setFromCurrencySymbol,
        setToCurrencySymbol,
        fromCurrencySymbol, 
        toCurrencySymbol,
        revertCurrencies
    } = useContext(CurrenciesContext)


    function stringNumberWithCommas(value: number) {
        return value.toLocaleString('en-US')
    }

    return (
        <div className={styles.container}>

            <h1>Conversor de moedas</h1>

            <div className={styles.inputsContainer}>

                <div className={styles.currencyInput}>
                    <input
                        placeholder='$'
                        type="text"
                        id="first"
                        value={stringNumberWithCommas(firstCurrencyValue)}
                        onInput={handleChangeCurrencyInput}
                    />

                    <div className={styles.selectContainer}>
                        <select
                            value={fromCurrencySymbol}
                            onChange={(event) => { setFromCurrencySymbol(event.target.value) }}
                        >
                            {
                                currencies.map(currency => {
                                    return (
                                        <option
                                            key={currency.symbol}
                                            value={currency.symbol}
                                        >
                                            {currency.symbol}
                                        </option>
                                    )
                                })
                            }
                        </select>
                    </div>
                </div>

                <Image
                    src="/currencyIcon.svg"
                    alt="Icone com setas para os dois lados, indicando conversão"
                    width={24}
                    height={24}
                    onClick={revertCurrencies}
                />

                <div className={styles.currencyInput}>
                    <input
                        placeholder='$'
                        type="text"
                        id="second"
                        value={stringNumberWithCommas(secondCurrencyValue)}
                        onInput={handleChangeCurrencyInput}
                    />
                    <div className={styles.selectContainer}>

                        <select
                            value={toCurrencySymbol}
                            onChange={(event) => { setToCurrencySymbol(event.target.value) }}
                            id='second-currency'
                        >
                            {
                                currencies.map(currency => {
                                    return (
                                        <option
                                            key={currency.symbol}
                                            value={currency.symbol}
                                        >
                                            {currency.symbol}
                                        </option>
                                    )
                                })
                            }
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}
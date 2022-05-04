import { ProductC } from "../Common/ProductC"
import ar from '../Pages/arr.module.css'
const Array = () => {
    return (
        <div>
            <div className={ar.contain}>
                <div className={ar.dis}>
                    <p>Showing Search Results For</p>
                    <h1>Sofas</h1>
                </div>
                <div className={ar.inter}>
                    <div>
                        <div className={ar.fc}>
                            <h2>Sort By</h2>
                            <form className={ar.sorting}>
                                <label className={ar.container}>One
                                    <input type="radio"  name="radio" />
                                    <span className={ar.checkmark}></span>
                                </label>
                                <label className={ar.container}>Two
                                    <input type="radio" name="radio" />
                                    <span className={ar.checkmark}></span>
                                </label>
                                <label className={ar.container}>Three
                                    <input type="radio" name="radio" />
                                    <span className={ar.checkmark}></span>
                                </label>
                    
                                </form>
                            <div style={{ marginTop: '8rem' }}>
                                <form className={ar.sorting}>

                                    <label>
                                        <input type="checkbox" />
                                        <span className={ar.label}>Relevance Searh</span>
                                    </label>

                                    <label>
                                        <input type="checkbox" />
                                        <span className={ar.label}>High To Low Price</span>
                                    </label>

                                    <label>
                                        <input type="checkbox" />
                                        <span className={ar.label}>Low To High Price</span>
                                    </label>


                                </form>
                            </div>
                        </div>
                    </div>

                    <div className={ar.par}>
                        <ProductC />
                        <ProductC />
                        <ProductC />
                        <ProductC />
                        <ProductC />
                        <ProductC />
                        <ProductC />
                        <ProductC />

                    </div>
                </div>
            </div>
        </div>
    )
}
export { Array }
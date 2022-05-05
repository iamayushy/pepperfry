import { ProductC } from "../Common/ProductC"
import ar from '../Pages/arr.module.css'
import { RadioGroup, Radio, Checkbox, CheckboxGroup } from '@mantine/core';

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

                            <div className={ar.rgp}>
                                <RadioGroup
                                    label="Sort By"
                                    orientation="vertical"
                                    color='orange'
                                    spacing='xl'
                                    required
                                >
                                    <Radio value="react" label="Relevance" />
                                    <Radio value="svelte" label="LOW TO HIGH PRICE" />
                                    <Radio value="ng" label="HIGH TO LOW PRICE" />
                                </RadioGroup>
                            </div>

                            <div className={ar.check}>

                                <CheckboxGroup
                                    defaultValue={['Goodrej']}
                                    label="Brands"
                                    orientation="vertical"
                                    size="md"
                                    color="orange"
                                    required
                                >
                                    <Checkbox value="Goodrej" label="Goodrej" />
                                    <Checkbox value="Maint" label="Maint" />
                                    <Checkbox value="Antd" label="Antd" />
                                    <Checkbox value="Melion" label="Melion" />
                                    <Checkbox value="Jumba" label="Jumba" />
                                    <Checkbox value="Bulma" label="Bulma" />
                                </CheckboxGroup>
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
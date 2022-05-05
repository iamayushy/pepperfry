import { ProductC } from "../Common/ProductC"
import ar from '../Pages/arr.module.css'
import { RadioGroup, Radio, Checkbox, CheckboxGroup } from '@mantine/core';
import { useEffect, useState } from "react";

const Array = () => {
    const [da, setDa] = useState([])
    const [cbox, setCbox] = useState([])
    useEffect(() => {
        fetch('http://localhost:3004/Sofa')
        .then((res)=> res.json())
        .then((dat) => setDa(dat))
    },[])
    
    const [rad, setRad] = useState('normal')
    rad === 'lh'? da.sort((a, b) => a.Price - b.Price):da.sort((a, b) => b.Price - a.Price)
    
        
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
                                    onChange={setRad}
                                    value={rad}
                                    label="Sort By"
                                    orientation="vertical"
                                    color='orange'
                                    spacing='xl'
                                    required
                                >
                                    <Radio value="normal" label="Relevance" />
                                    <Radio value="lh" label="LOW TO HIGH PRICE" />
                                    <Radio value="hl" label="HIGH TO LOW PRICE" />
                                </RadioGroup>
                            </div>

                            <div className={ar.check}>

                                <CheckboxGroup
                                    onChange={setCbox}
                                    value={cbox}
                                    label="Brands"
                                    orientation="vertical"
                                    size="md"
                                    color="orange"
                                    required
                                >

                                    {da.map((br) => (
                                        
                                        <Checkbox key={br.id} value={br.title} label={br.title}/>
                                         
                                    ))}
                                    {/* <Checkbox value="Goodrej" label="Goodrej" />
                                    <Checkbox value="Maint" label="Maint" />
                                    <Checkbox value="Antd" label="Antd" />
                                    <Checkbox value="Melion" label="Melion" />
                                    <Checkbox value="Jumba" label="Jumba" />
                                    <Checkbox value="Bulma" label="Bulma" /> */}
                                </CheckboxGroup>
                            </div>
                        </div>





                    </div>

                    <div className={ar.par}>
                        {da.map((all => (
                            <ProductC key={all.id}
                            name={all.name}
                            brand={all.title}
                            price={all.Price}
                            image={all.image[0]}/>

                        )))}            

                      
                    </div>
                </div>
            </div>
        </div>
    )
}
export { Array }
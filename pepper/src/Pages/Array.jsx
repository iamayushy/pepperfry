import { ProductC } from "../Common/ProductC"
import ar from '../Pages/arr.module.css'
import { RadioGroup, Radio, Checkbox, CheckboxGroup } from '@mantine/core';
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Redux/Product/action";

const Array = () => {
    const task = useSelector((store) => store.products.products)
    console.log(task)
    const dispatch = useDispatch()
    const params = useParams()
    const [da, setDa] = useState([])
    const [cbox, setCbox] = useState(['Mantine'])
    useEffect(() => {
        dispatch(getProducts(params.id))
    },[params.id])
    const [rad, setRad] = useState('normal')
    rad === 'lh'? task.sort((a, b) => a.Price - b.Price):task.sort((a, b) => b.Price - a.Price)
    const handl= () => {
       console.log(rad);
    }
    
    
    let ans = []
    cbox.forEach(ele => {
      ans =  task.filter((ans) => ans.title === ele)
      
        
    })
    
    
        
    return (
        <div>
            <div className={ar.contain}>
                <div className={ar.dis}>
                    <p>Showing Search Results For</p>
                    <h1>{`" ${params.id} "`}</h1>
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

                                    {task.map((br) => (
                                        
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


                        {
                            ans.map((all => {
                            return <ProductC key={all.id}
                                pid={all.id}
                                rou={params.id}
                                name={all.name}
                                brand={all.title}
                                price={all.Price}
                                image={all.image[0]}/>
                            }))
                        }
                        {task.map((all => (
                            <ProductC key={all.id}
                            pid={all.id}
                            rou={params.id}
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
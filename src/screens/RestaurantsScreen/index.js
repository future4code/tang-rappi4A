import React, { useContext, useEffect, useState } from 'react';
import {Botão, ContainerImagem, ModalContainer, ContainerPage, Containers, Imagem2, FontPrincipal, Image, InformaçõesProduto, Paragrafos, ParagrafoSpan, Titulo, Titulos2, PriceSpan} from "../RestaurantsScreen/styled"
import Cards from "./Cards"
import useRequestData from '../../hooks/useRequestData';
import {BASE_URL}from "../../constants/urls"
import axios from "axios"
import {useParams, useHistory} from "react-router-dom"
import GlobalStateContext from "../../global/GlobalStateContext"
import useProtectedPage from "../../hooks/useProtectPage"
import  goToBoxAmount  from "../../routes/Coordinator"
import Modal from 'react-modal'
import {BoxAmount} from "./BoxAmount"
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import { makeStyles } from "@material-ui/core";



export const RestaurantsScreen = () => {
  // useProtectedPage()
  Modal.setAppElement("#root")
  const [restaurants, setRestaurants] = useState([])
  const [productsId, setProductsId] = useState([])
  const [open, setOpen] = useState(false);
  const [quantity, setQuantity] = useState(1)
  const {states, setters, requests} = useContext(GlobalStateContext)
    
    const history = useHistory();
    const params = useParams()

    useEffect(() => {
      axios.get(`${BASE_URL}/restaurants/${params.id}`,{headers: {"auth": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IldScHBFeExMdXI4SWU1WTVLMkVoIiwibmFtZSI6IlRpYWdvIFNlc3RhcmkiLCJlbWFpbCI6InRpYWdvc2VzdGFyaUBnbWFpbC5jb20iLCJjcGYiOiIyMjIuMjIyLjQ0NC0wOSIsImhhc0FkZHJlc3MiOnRydWUsImFkZHJlc3MiOiJSLiBBZm9uc28gQnJheiwgMTc3LCA3MiAtIFZpbGEgTi4gQ29uY2Vpw6fDo28iLCJpYXQiOjE2MTIwMzgyNTJ9.lCXhVaCaDpHtB5D9zEZ34vBpAqCLgBP6wGj0nLs_STU"}})
      .then((response) => {
        console.log(response.data.restaurant.products)
          setRestaurants(response.data.restaurant)
      }).catch((error) => {
      })
      }, [])

    useEffect(() => {
      axios.get(`${BASE_URL}/restaurants/${params.id}`,{headers: {"auth": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IldScHBFeExMdXI4SWU1WTVLMkVoIiwibmFtZSI6IlRpYWdvIFNlc3RhcmkiLCJlbWFpbCI6InRpYWdvc2VzdGFyaUBnbWFpbC5jb20iLCJjcGYiOiIyMjIuMjIyLjQ0NC0wOSIsImhhc0FkZHJlc3MiOnRydWUsImFkZHJlc3MiOiJSLiBBZm9uc28gQnJheiwgMTc3LCA3MiAtIFZpbGEgTi4gQ29uY2Vpw6fDo28iLCJpYXQiOjE2MTIwMzgyNTJ9.lCXhVaCaDpHtB5D9zEZ34vBpAqCLgBP6wGj0nLs_STU"}})
      .then((response) => {
        setProductsId(response.data.restaurant.products.map((item) => {
          return (
            item.id
          )
        }))         
      }).catch((error) => {
      })
      }, [params.id])

        const handleOpen = (event) => {
          setOpen(true);
          console.log(event)
        };
      
        const handleClose = (event) => {
          setOpen(false);
          console.log(event)
        };

        const handleChange = (valor) => {
          // setQuantity(Number(event.target.value));
          setQuantity(valor)
        }
        
        console.log(quantity)

        const useStyles = makeStyles((theme) => ({
          form: {
            display: 'flex',
            flexDirection: 'column',
            margin: 'auto',
            width: 'fit-content',
            
          },
          formControl: {
            marginTop: theme.spacing(2),
            minWidth: 120,
           
          },
          
        }));
        
        const classes = useStyles();
        
        
        // const useStyles = makeStyles((theme) => ({
        //   modal: {
        //     display: 'flex',
        //     alignItems: 'center',
        //     justifyContent: 'center',
        //     width: "250",
        //     height: "250",
        //   },
        //   paper: {
        //     backgroundColor: theme.palette.background.paper,
        //     border: '2px solid #000',
        //     boxShadow: theme.shadows[5],
        //     padding: theme.spacing(2, 4, 3),
        //   },
        // }));
        // const styles = useStyles();
        // const amountProduct = productsId
       

      return (
      <ContainerPage>
        <Cards 
        name={restaurants.name}
        logoUrl={restaurants.logoUrl}
        category={restaurants.category}
        deliveryTime={restaurants.deliveryTime}
        shipping={restaurants.shipping}
        address={restaurants.address}
        />
        {restaurants.products && restaurants.products.map((item) => {
            
            return (
            
            <Containers>
                <Imagem2 src={item.photoUrl}></Imagem2>
              <InformaçõesProduto>
                <FontPrincipal>{item.name}</FontPrincipal>
                  <span>{item.description}</span>
                {/* <ParagrafoSpan> */}
                  <ParagrafoSpan>
                    <PriceSpan> R$ {item.price}</PriceSpan>
                    <Botão onClick={() => handleOpen(item.id)}>Adicionar</Botão>
                  </ParagrafoSpan>
                  
                  <Dialog isOpen={open} onRequestClose={() => setOpen(false)} 
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="max-width-dialog-title"
                  >
                    <DialogTitle id="max-width-dialog-title">Selecione a quantidade desejada</DialogTitle>
                    <DialogContent>
                      <form className={classes.form} noValidate>
                        <FormControl className={classes.formControl}>
                          <InputLabel htmlFor="max-width">Quantidade</InputLabel>
                          <Select
                            inputProps={{
                              name: 'quantidade',
                              id: 'outlined-age-native-simple',
                            }}
                           >
                            <MenuItem onClick={() => handleChange(1)} onChange={handleChange} value={1}>1</MenuItem>
                            <MenuItem onClick={() => handleChange(2)} onChange={handleChange} value={2}>2</MenuItem>
                            <MenuItem onClick={() => handleChange(3)} onChange={handleChange} value={3}>3</MenuItem>
                            <MenuItem onClick={() => handleChange(4)} onChange={handleChange} value={4}>4</MenuItem>
                            <MenuItem onClick={() => handleChange(5)} onChange={handleChange} value={5}>5</MenuItem>
                          </Select>
                        </FormControl>
                      </form>
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={null} color="primary">
                      Adicionar ao Carrinho
                    </Button>
                    </DialogActions>
                    </Dialog>
                    {/* <Modal className={styles.modal} isOpen={open} onRequestClose={() => setOpen(false)}>
                      <Select
                       // value={productsId}
                        inputProps={{
                          name: 'quantidade',
                          id: 'outlined-age-native-simple',
                        }}
                       >
                        <option aria-label="None" value="" />
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={3}>4</option>
                        <option value={3}>5</option>
                      </Select>
                      <Button onclick={null}>Adicionar ao Carrinho</Button>
                    </Modal> */}
              {/* </ParagrafoSpan> */}
            </InformaçõesProduto>
          </Containers> 
            )
        })}    
      </ContainerPage>
  ) 
}

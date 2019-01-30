import React, { Component } from "react";
import { Container, Header, Title, Button, Icon, Left, Right, 
  Body, Text, Content, Card, CardItem, H3, H1, View, H2 } from "native-base";
import { Image } from 'react-native';
  
export default class TuitionPayments extends Component {
  render() {
    return (
      <Container>
        <Content style={{backgroundColor: '#F5F5F5'}}>
        <View span style={{backgroundColor: '#1D90F8', height: 150, flexDirection: 'row'}}>
          <Left style={{marginLeft: 25}}>
            <Icon
              name="long-arrow-alt-left"
              type="FontAwesome5"
              style={{color: 'white'}}
            />
          </Left>
          <Body style={{marginLeft: -25}}>
            <H2 style={{color: 'white', width: 250, fontWeight: 'bold'}}>Pembayaran SPP</H2>
          </Body>
          <Right />
        </View>
          <Card style={{marginLeft:30,marginRight:30, borderRadius: 7, marginTop: -30}}>
            <CardItem>
              <Left>
                <View style={{flexDirection: 'row'}}>
                  <View style={{marginRight: 15, marginTop: 2.5}}>
                    <Image
                        source={require('./app/images/Frame.png')}
                    />
                  </View>
                  <View>
                    <Text style={{fontWeight: 'bold'}}>Rp. 2.100.000</Text>
                  </View>
                </View>
              </Left>
              <Body/>
              <Right>
                <Button style={{backgroundColor: '#208CF4', borderRadius: 5}}>
                  <Text>Top Up</Text>
                </Button>
              </Right>
            </CardItem>
          </Card>
          <Text>{"\n"}</Text>
          <H3 style={{marginLeft: 30, fontWeight: 'bold', color: '#30353C'}}>Yang Harus Dibayar {"\n"}</H3>
          <Card style={{marginLeft:30,marginRight:30, borderRadius: 7}}>
            <CardItem style={{backgroundColor: '#7D81EF'}}>
              <Left>
                <View>
                  <View style={{marginTop: 5}}>
                    <Text style={{fontWeight: 'bold', color: '#FFFFFF'}}>Total SPP</Text>
                  </View>
                  <View style={{marginTop: 15}}>
                    <H1 style={{fontWeight: 'bold', color: '#FFFFFF'}}>Rp. 460.000</H1>
                  </View>
                  <View style={{marginTop: 15, marginBottom: 10}}>
                    <Text style={{fontSize: 12, color: '#FFFFFF'}}>Oktober 2018 - November 2018</Text>
                  </View>
                </View>
              </Left>
              <Right>
              </Right>
            </CardItem>
          </Card>
          <Button full bordered info style={{borderRadius: 7, borderTopWidth: 2, borderLeftWidth: 2,
                borderRightWidth: 2, borderBottomWidth: 2, margin: 30, height: 65}}>
                  <Text style={{fontWeight: 'bold'}}>Bayar Sekarang</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
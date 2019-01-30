import React, { Component } from "react";
import { Container, Header, Button, Icon, Left, Right, 
  Body, Text, Content, Card, CardItem, H3, H1, View, H2, Input, Radio } from "native-base";

  
export default class TopUpBalance extends Component {
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
            <H2 style={{color: 'white', width: 250, fontWeight: 'bold'}}>Top Up Saldo</H2>
          </Body>
          <Right />
        </View>
          <Text>{"\n"}</Text>
          <H3 style={{marginLeft: 30, fontWeight: 'bold', color: '#4A4E55'}}>Nominal Top Up{"\n"}</H3>
          <View>
            <Input
              placeholder={"1.000.000"}
              // style={{backgroundColor: '#FBFBFB'}}
              style={{backgroundColor: '#FBFBFB', marginLeft:30,marginRight:30, paddingLeft: 20}}
            />
          </View>
            <H3 style={{fontWeight: 'bold', marginLeft: 30, marginTop: 30, color: '#4A4E55', marginBottom: 15}}>Metode Pembayaran</H3>
          <View style={{marginTop: 40, marginLeft: 30}}>
            <H3 style={{fontWeight: 'bold', marginBottom: 15, color: '#4A4E55'}}>Catatan Transaksi</H3>
          </View>
          <Card style={{marginLeft:30,marginRight:30, marginBottom: 10}}>
            <CardItem>
              <Left>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <View style={{flex: 0.1}}>
                    <Radio
                    checked={true}
                    />
                  </View>
                  <View style={{flex: 0.5}}>
                    <Text style={{fontWeight: 'bold', color: '#4A4E55', width: 150}}>Via Transfer Bank</Text>
                  </View>
                  <View style={{flex: 0.5}}>
                    <Text style={{color: '#52D8A2', width: 150, textAlign: 'right'}}>+Rp. 905.000</Text>
                  </View>
                </View>
              </Left>
            </CardItem>
          </Card>
          <Card style={{marginLeft:30,marginRight:30}}>
            <CardItem>
              <Left>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <View style={{flex: 0.1}}>
                    <Radio
                    checked={true}
                    />
                  </View>
                  <View style={{flex: 0.5}}>
                    <Text style={{fontWeight: 'bold', color: '#4A4E55', width: 150}}>Via Pulsa Prabayar</Text>
                  </View>
                  <View style={{flex: 0.5}}>
                    <Text style={{color: '#52D8A2', width: 150, textAlign: 'right'}}>+Rp. 907.000</Text>
                  </View>
                </View>
              </Left>
            </CardItem>
          </Card>
          <Button full bordered info style={{borderRadius: 7, borderTopWidth: 2, borderLeftWidth: 2,
                borderRightWidth: 2, borderBottomWidth: 2, margin: 30, height: 65}}>
                  <Text style={{fontWeight: 'bold'}}>Lanjut</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

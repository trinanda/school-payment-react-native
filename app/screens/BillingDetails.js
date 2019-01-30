import React, { Component } from "react";
import { Container, Header, Title, Button, Icon, Left, Right, 
  Body, Text, Content, Card, CardItem, H3, H1, View, H2 } from "native-base";
export default class BillingDetails extends Component {
  render() {
    return (
      <Container>
        <Header span style={{backgroundColor: '#5ADAAC', height: 170}}>
          <Left style={{marginTop: 10, marginLeft: 10}}>
            <Icon
              name="arrow-back"
              style={{color: 'white'}}
            />
            <Icon
              name="person"
              style={{color: '#C4C4C4', marginTop: 10, fontSize: 40}}
            />
            <Text style={{width: 180, color: 'white', marginTop: 30, fontWeight: 'bold'}}>SMK Telkom Jakarta</Text>
            <Text style={{color: 'white', width: 120}}>3103 005 212</Text>
          </Left>
          <Body style={{marginBottom: 55, marginLeft: -20}}>
            <Text style={{color: 'white'}}>Arya Pranama</Text>
            <Text style={{color: 'white'}}>XL RPL 2</Text>
          </Body>
          <Right style={{marginRight: 10, marginTop: 10}}>
            <View style={{color: 'yellow', flex: 1}}>
              <View style={{flex: 0.5, marginLeft: 125}}>
                <Icon
                  name="notifications-outline"
                  style={{color: 'white'}}
                />
              </View>
              <View style={{flex: 0.5, marginLeft: 55, marginTop: 35}}>
                <Button bordered info style={{borderRadius: 7, borderTopWidth: 2, borderLeftWidth: 2,
                    borderRightWidth: 2, borderBottomWidth: 2, color: 'white', borderColor: 'white'}}>
                      <Text style={{color: 'white'}}>History</Text>
                </Button>
              </View>
            </View>
          </Right>
        </Header>
        <Content style={{backgroundColor: '#F5F5F5'}}>
          <Text>{"\n"}</Text>
          <H3 style={{marginLeft: 30, fontWeight: 'bold'}}>Tagihan - Tagihan{"\n"}</H3>
          
          <Card style={{marginLeft:30, marginRight:30, borderRadius: 7, height: 150, backgroundColor: '#7D83EE'}}>
            <CardItem style={{backgroundColor: '#7D83EE'}}>
              <Left>
                <View style={{flex: 1}}>
                  <View style={{flex: 0.3}}>
                    <Text style={{color: 'white', fontWeight: 'bold'}}>Total SPP</Text>
                  </View>
                  <View style={{flex: 0.3, marginTop: 30}}>
                    <H2 style={{color: 'white', width: 200, fontWeight: 'bold'}}>Rp. 430.000</H2>
                  </View>
                  <View style={{flex: 0.3, marginTop: 50}}>
                    <Text style={{color: 'white', fontSize: 12, width: 200}}>October 2018 - November 2018</Text>
                  </View>
                </View>             
              </Left>
              <Right style={{marginRight: -180, marginTop: 80}}>
                <Button light style={{borderRadius: 5}}>
                  <Text style={{color: '#9AB4F2'}}>Bayar</Text>
                </Button>
              </Right>
              <Text>{"\n"}</Text>
              <Text>{"\n"}</Text>
              <Body>
                {/* <Text style={{color: 'white', fontSize: 12}}>October 2018 - November 2018</Text> */}
              </Body>
            </CardItem>
          </Card>
          
          <Card style={{marginLeft:30,marginRight:30, borderRadius: 7}}>
            <CardItem style={{backgroundColor: '#FD8495'}}>
              <View style={{flex: 1}}>
                <View style={{ flex: 0.3}}>
                  <Text style={{color: 'white', fontWeight: 'bold'}}>Total Lainnya</Text>
                </View>
                <View style={{ flex: 0.3, marginTop: 20}}>
                  <H2 style={{color: 'white', fontWeight: 'bold'}}>Rp. 0</H2>
                </View>
                <View style={{ flex: 0.3, marginTop: 30}}>
                  <Text style={{color: 'white', fontSize: 12, width: 200}}>October 2018 - November 2018</Text>
                </View>
              </View>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
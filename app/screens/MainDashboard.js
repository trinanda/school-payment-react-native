import React, { Component } from "react";
import { Container, Header, Title, Button, Icon, Left, Right, 
  Body, Text, Content, Card, CardItem, H3, H1, View } from "native-base";

  
export default class MainDashboard extends Component {
  render() {
    return (
      <Container>
        <Content style={{backgroundColor: '#F5F5F5'}}>
        <View span style={{backgroundColor: '#1D90F8', height: 150}}>
          <Left style={{marginRight: -25}}/>
          <Body style={{marginLeft: -25}}>
            <Title>Selamat Datang!</Title>
            <Text style={{color: 'white'}}>lorem ipsum neler lorem</Text>
          </Body>
          <Right />
        </View>
          <Card style={{marginLeft:30,marginRight:30, borderRadius: 7, marginTop: -30}}>
            <CardItem>
              <Left>
                <Text style={{fontWeight: 'bold'}}>Saldo Saya</Text>
              </Left>
              <Body/>
              <Right>
                <Button style={{backgroundColor: '#208CF4', borderRadius: 5}}>
                  <Text>Top Up</Text>
                </Button>
              </Right>
            </CardItem>
            <CardItem>
              <Left>
                <H3 style={{color: '#39D395', fontWeight: 'bold'}}>Rp. 430.000</H3>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Button full bordered info style={{borderRadius: 7, borderTopWidth: 2, borderLeftWidth: 2,
                borderRightWidth: 2, borderBottomWidth: 2}}>
                  <Text>History</Text>
                </Button>
              </Body>
            </CardItem>
          </Card>
          <Text>{"\n"}</Text>
          <Text>{"\n"}</Text>
          <H3 style={{marginLeft: 30, fontWeight: 'bold'}}>Daftar Siswa {"\n"}</H3>
          <Card style={{marginLeft:30,marginRight:30, borderRadius: 7}}>
            <CardItem style={{backgroundColor: '#35D395'}}>
              <Left>
                <Icon
                  name="person"
                  style={{color: '#C4C4C4'}}
                />
                <Text style={{color: 'white'}}>Bayu Pranama{"\n"}XL RPL 2</Text>
              </Left>
              <Right>
                <Icon
                  name="notifications-outline"
                  size={50}
                  style={{color: '#FFFFFF', fontSize: 30}}
                />
              </Right>
              <Text>{"\n"}</Text>
              <Text>{"\n"}</Text>
            </CardItem>
            <CardItem style={{backgroundColor: '#35D395'}}>
              <Body>
                <Text style={{fontWeight: 'bold', color: 'white'}}>SMK Telkom Yogyakarta</Text>
                <Text style={{color: 'white'}}>3103 116 989</Text>
              </Body>
            </CardItem>
          </Card>
          <Card style={{marginLeft:30,marginRight:30, borderRadius: 7}}>
            <CardItem style={{backgroundColor: '#FFBC85'}}>
              <Left>
                <Icon
                  name="person"
                  style={{color: '#C4C4C4'}}
                />
                <Text style={{color: 'white'}}>Bayu Pranama{"\n"}XL RPL 2</Text>
              </Left>
              <Right>
                <Icon
                  name="notifications-outline"
                  size={50}
                  style={{color: '#FFFFFF', fontSize: 30}}
                />
              </Right>
              <Text>{"\n"}</Text>
              <Text>{"\n"}</Text>
            </CardItem>
            <CardItem style={{backgroundColor: '#FFBC85'}}>
              <Body>
                <Text style={{fontWeight: 'bold', color: 'white'}}>SMK Telkom Yogyakarta</Text>
                <Text style={{color: 'white'}}>3103 116 989</Text>
              </Body>
            </CardItem>
          </Card>
          <Button full bordered info style={{borderRadius: 7, borderTopWidth: 2, borderLeftWidth: 2,
                borderRightWidth: 2, borderBottomWidth: 2, margin: 30}}>
                  <Text>Tambah Siswa</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
import React, { Component } from "react";
import { Container, Header, Title, Button, Icon, Left, Right, 
  Body, Text, Content, Card, CardItem, H3, H1, View, DatePicker, H2 } from "native-base";

  
export default class UserHistory extends Component {
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
            <H2 style={{color: 'white', width: 250, fontWeight: 'bold'}}>History Anda</H2>
          </Body>
          <Right />
        </View>
          <Text>{"\n"}</Text>
          <H3 style={{marginLeft: 30, fontWeight: 'bold', color: '#4A4E55'}}>Tanggal{"\n"}</H3>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <View>
              <DatePicker
                defaultDate={new Date(2018, 4, 4)}
                minimumDate={new Date(2018, 1, 1)}
                maximumDate={new Date(2018, 12, 31)}
                locale={"en"}
                timeZoneOffsetInMinutes={undefined}
                modalTransparent={false}
                animationType={"fade"}
                androidMode={"default"}
                placeHolderText="Select date"
                textStyle={{ color: "black" }}
                placeHolderTextStyle={{ color: "black" }}
                onDateChange={this.setDate}
                disabled={false}
                />
            </View>
            <View>
              <Icon
                name="angle-right"
                type="FontAwesome5"
                style={{color: '#2C94F5'}}
              />
            </View>
            <View>
              <DatePicker
              defaultDate={new Date(2018, 4, 4)}
              minimumDate={new Date(2018, 1, 1)}
              maximumDate={new Date(2018, 12, 31)}
              locale={"en"}
              timeZoneOffsetInMinutes={undefined}
              modalTransparent={false}
              animationType={"fade"}
              androidMode={"default"}
              placeHolderText="Select date"
              textStyle={{ color: "black" }}
              placeHolderTextStyle={{ color: "black" }}
              onDateChange={this.setDate}
              disabled={false}
              />
              </View>
            </View>
            <H3 style={{fontWeight: 'bold', marginLeft: 30, marginTop: 30, color: '#4A4E55', marginBottom: 15}}>Pengeluaran</H3>
          <Card style={{marginLeft:30,marginRight:30}}>
            <CardItem style={{backgroundColor: '#FB8D97'}}>
              <Left>
                <View style={{marginTop: 13}}>
                  <Text style={{color: "white", fontWeight: 'bold', fontSize: 18}}>Total Pengeluaran</Text>
                  <H2 style={{color: 'white', fontWeight: 'bold', marginTop: 15}}>Rp. 1.320.000</H2>
                </View>
              </Left>
              <Right>
              </Right>
              <Text>{"\n"}</Text>
              <Text>{"\n"}</Text>
            </CardItem>
            <CardItem style={{backgroundColor: '#FB8D97'}}>
              <Body>
                <Text style={{color: 'white', fontSize: 12}}>September 2018 - November 2018</Text>
              </Body>
            </CardItem>
          </Card>
          <View style={{marginTop: 40, marginLeft: 30}}>
            <H3 style={{fontWeight: 'bold', marginBottom: 15, color: '#4A4E55'}}>Catatan Transaksi</H3>
          </View>
          <Card style={{marginLeft:30,marginRight:30}}>
            <CardItem>
              <Left>
                <View>
                  <Text style={{fontWeight: 'bold', color: '#4A4E55'}}>Study Tour</Text>
                  <Text style={{width: 150, color: '#D7D7D7', marginTop: 5}}>27 September 2017</Text>
                </View>
              </Left>
              <Body/>
              <Right>
                <View>
                  <Text style={{color: '#FB9CA5', width: 150, textAlign: 'right'}}>-Rp. 600.000</Text>
                  <Text style={{textAlign: 'right', color: '#D7D7D7', marginTop: 5}}>13.27 PM</Text>
                </View>
              </Right>
            </CardItem>
          </Card>
          <View style={{borderLeftWidth: 3, borderLeftColor: 'black', height: 25, marginLeft: 55, marginTop: -5, marginBottom: -5}}/>
          <Card style={{marginLeft:30,marginRight:30}}>
            <CardItem>
              <Left>
                <View>
                  <Text style={{fontWeight: 'bold', color: '#4A4E55'}}>Ujian Sekolah</Text>
                  <Text style={{width: 150, color: '#D7D7D7', marginTop: 5}}>5 Agustus 2018</Text>
                </View>
              </Left>
              <Body/>
              <Right>
                <View>
                  <Text style={{color: '#FB9CA5', width: 150, textAlign: 'right'}}>-Rp. 430.000</Text>
                  <Text style={{textAlign: 'right', color: '#D7D7D7', marginTop: 5}}>15.22 PM</Text>
                </View>
              </Right>
            </CardItem>
          </Card>
          <View style={{borderLeftWidth: 3, borderLeftColor: 'black', height: 25, marginLeft: 55, marginTop: -5, marginBottom: -5}}/>
          <Card style={{marginLeft:30,marginRight:30}}>
            <CardItem>
              <Left>
                <View>
                  <Text style={{fontWeight: 'bold', color: '#4A4E55'}}>Daftar Ulang Sekolah</Text>
                  <Text style={{width: 150, color: '#D7D7D7', marginTop: 5}}>28 Desember 2018</Text>
                </View>
              </Left>
              <Body/>
              <Right>
                <View>
                  <Text style={{color: '#FB9CA5', width: 150, textAlign: 'right'}}>-Rp. 870.000</Text>
                  <Text style={{textAlign: 'right', color: '#D7D7D7', marginTop: 5}}>22.21 PM</Text>
                </View>
              </Right>
            </CardItem>
          </Card>
          <View style={{borderLeftWidth: 3, borderLeftColor: 'black', height: 25, marginLeft: 55, marginTop: -5, marginBottom: -5}}/>
          <Card style={{marginLeft:30,marginRight:30, marginBottom: 30}}>
            <CardItem>
              <Left>
                <View>
                  <Text style={{fontWeight: 'bold', color: '#4A4E55'}}>Pembayaran SPP</Text>
                  <Text style={{width: 150, color: '#D7D7D7', marginTop: 5}}>12 Maret 2018</Text>
                </View>
              </Left>
              <Body/>
              <Right>
                <View>
                  <Text style={{color: '#FB9CA5', width: 150, textAlign: 'right'}}>-Rp. 900.000</Text>
                  <Text style={{textAlign: 'right', color: '#D7D7D7', marginTop: 5}}>10.21 PM</Text>
                </View>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

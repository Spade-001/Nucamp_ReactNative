import { useState } from "react";
import { Card } from 'react-native-elements';
import { PARTNERS } from "../shared/partners";
import { CAMPSITES } from "../shared/campsites";
import { PROMOTIONS } from "../shared/promotions";
import { ScrollView, Text, View } from 'react-native';

const FeaturedItem = ({ item }) => {
    if (item) {
        return (
            <Card containerStyle={{ padding: 0 }}>
                <Card.Image source={item.image}>
                    <View style={{ justifyContent: 'center', flex: 1 }}>
                        <Text
                            style={{
                                color: 'white',
                                textAlign: 'center',
                                fontSize: 20
                            }}                        
                        >
                            {item.name}
                        </Text>
                    </View>
                </Card.Image>
                <Text style={{margin: 20}}>{item.description}</Text>
            </Card>
        )
    }
    return <View />
};

const HomeScreen = () => {
    const [partners, setPartners] = useState(PARTNERS);
    const [campsites, setCampsites] = useState(CAMPSITES);
    const [promotions, setPromotions] = useState(PROMOTIONS); 

    const featPartner = partners.find((item) => item.featured);
    const featCampsite = campsites.find((item) => item.featured);
    const featPromotion  = promotions.find((item) => item.featured);

    return (
        <ScrollView>
            <FeaturedItem item={featCampsite}/>
            <FeaturedItem item={featPromotion}/>
            <FeaturedItem item={featPartner}/>
        </ScrollView>
    )
};

export default HomeScreen;
import React, { useState, Component } from "react";
import PropTypes from "prop-types";
import Wrapper from "../../Components/Wrapper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import VodafoneImage from "../VodafoneImage";
import VodafoneTab from "../VodafoneTab";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  fwCentered: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
}));

const BottomTabs = (props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid container fullWidth>
      <Grid item xs={12} className={classes.fwCentered}>
        <Grid container fullWidth>
          <Tabs
            value={value}
            onChange={handleChange}
            class={classes.fwCentered}
            aria-label="simple tabs example"
          >
            <Tab
              label="Dijitalden Başvuru Avantajları"
              icon={
                <VodafoneImage src="https://cms.vodafone.com.tr/static/img/content/21-03/31/answ1.png" />
              }
              {...a11yProps(0)}
            />
            <Tab
              label="Yeni Numara Almak"
              icon={
                <VodafoneImage src="https://cms.vodafone.com.tr/static/img/content/21-03/31/img2.png" />
              }
              {...a11yProps(1)}
            />
            <Tab
              label="Numara Taşımak"
              icon={
                <VodafoneImage src="https://cms.vodafone.com.tr/static/img/content/21-03/31/img1.png" />
              }
              {...a11yProps(2)}
            />
            <Tab
              label="Genel"
              icon={
                <VodafoneImage src="https://cms.vodafone.com.tr/static/img/content/21-03/31/answ4.png" />
              }
              {...a11yProps(3)}
            />
          </Tabs>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <TabPanel value={value} index={0}>
          <VodafoneTab
            label="Dijitalden Başvuru Avantajları"
            object={TabsDetails[0]}
          />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <VodafoneTab label="Yeni Numara Almak" object={TabsDetails[1]} />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <VodafoneTab label="Numara Taşımak" object={TabsDetails[2]} />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <VodafoneTab label="Genel" object={TabsDetails[3]} />
        </TabPanel>
      </Grid>
    </Grid>
  );
};

export default BottomTabs;

const TabsDetails = [
  {
    firstArea: [
      {
        key: 1,
        title:
          "Vodafone'un dijital kanallarından (Yanımda veya Vodafone.com.tr) başvuru yaptığımda herhangi bir kurye ya da başvuru ücreti öder miyim?",
        text: "Hayır, dijitalden yaptığınız başvurular tamamen ücretsizdir; ayrıca hattınız adresinize ücretsiz teslim edilir. Vergiler hakkında detaylı bilgi almak için lütfen tıklayınız.",
      },
      {
        key: 2,

        title: "Teslimatım ne kadar sürede gerçekleşir?",
        text: "Sitemizde belirtilen ilçelerden birinde oturuyorsanız 24 saat içinde, başka bir ilçede ikamet ediyorsanız ise 2-4 gün içerisinde hattınızı size teslim edeceğiz.",
      },
      {
        key: 3,

        title: "Evraklarımı nasıl teslim alacağım?",
        text: "Hattınıza dair evraklar, hattın teslimatını gerçekleştirecek kurye elemanı tarafından getirilecektir. Hattınızı teslim aldığınızda evrakları imzalayarak işlemlerinizi kolayca tamamlayabilirsiniz.",
      },
    ],
    secondArea: [
      {
        key: 4,

        title: "Online’a Özel Avantajlar nelerdir?",
        text: "Vodafone’un dijital kanallarından yaptığınız başvurularda birçok tarifeye özel ilk 3 ay %15’e varan indirime sahip olacaksınız. Tüm tarifeleri incelemek için tıklayınız.",
      },
      {
        key: 5,

        title: "Tıkla Gel Al nedir?",
        text: "Başvurunuz sırasında Tıkla Gel Al yöntemini seçerek, SIM kartınızı dilediğiniz herhangi bir Vodafone Mağazasından hızlıca teslim alabilirsiniz. Mağazaya gittiğinizde işleminizin tamamlanabilmesi için size gönderilen bilgilendirme SMS'inde yer alan başvuru numaranızı ya da TC kimlik numaranızı mağaza çalışanına vermeniz yeterlidir. Başvurunuzun geçerlilik süresi 10 gündür, İlk 3 gün içerisinde dilediğiniz mağazamızı ziyaret ederek sim kartınızı teslim alabilirsiniz. 3 günün sonunda hattınız adresinize teslim edilmek üzere kuryeye yönlendirilecektir. Size en yakın Vodafone Mağazalarını incelemek için tıklayınız.",
      },
      {
        key: 6,

        title: "Tıkla Gel Al nedir?",
        text: "Sitemizde belirtilen ilçelerden birinde oturuyorsanız 24 saat içinde, başka bir ilçede ikamet ediyorsanız ise 2-4 gün içerisinde hattınızı size teslim edeceğiz.",
      },
    ],
  },
  {
    firstArea: [
      {
        key: 7,

        title: "Yeni Hat başvuru süreci nasıl işliyor?",
        text: "Yeni hat başvuru işlemini yerinizden kalkmadan, hızlı ve kolay bir şekilde gerçekleştirmek için, bu bağlantıya tarifenizi seçin, Yeni Hat Al’a tıklayın sonrasında numaranızı seçin ve tıklayarak tarifenizi kolayca belirleyin, 'Yeni Hat Al' seçeneğine tıklayın, telefon numaranızı seçin ve bilgilerinizi doldurun. Ardından başvurunuzu doğrulamak ve randevu almak için sizi arayacağız. SIM kartınız, belirteceğiniz tarihte ücretsiz olarak adresinize iletilecektir. Dilerseniz başvurunuz esnasında 'Vodafone Mağazası'ndan Alacağım' seçeneğini seçerek herhangi bir mağazamızı ziyaret edip, aktivasyon işlemlerinizi gerçekleştirerek de sim kartınızı teslim alabilirsiniz.",
      },
      {
        key: 8,

        title:
          "Halihazırda başka bir Vodafone hattım var yeni hat alabilir miyim?",
        text: "Evet, alabilirsiniz.",
      },
      {
        key: 9,

        title:
          "Benim adıma kayıtlı başka bir hattım var. Yeni hat alabilir miyim?",
        text: "Üzerinize kayıtlı olan hat sayısı 10’dan az ise tarifeler sayfasından tarifenizi seçip yeni hat alabilirsiniz.",
      },
      {
        key: 10,

        title: "Teslimatım ne kadar sürede gerçekleşir?",
        text: "Sitemizde belirtilen ilçelerden birinde oturuyorsanız 24 saat içinde, başka bir ilçede ikamet ediyorsanız ise 2-4 gün içerisinde hattınızı size teslim edeceğiz.",
      },
    ],
    secondArea: [
      {
        key: 11,

        title:
          "Vodafone'un dijital kanallarından (Yanımda veya Vodafone.com.tr) başvuru yaptığımda herhangi bir kurye ya da başvuru ücreti öder miyim?",
        text: "Hayır, dijitalden yaptığınız başvurular tamamen ücretsizdir; ayrıca hattınız adresinize ücretsiz teslim edilir. Vergiler hakkında detaylı bilgi almak için lütfen tıklayınız.",
      },
      {
        key: 12,

        title: "Yeni hattımı kullanmaya ne zaman başlayabilirim?",
        text: "Yeni satın alınan hatlarda aktivasyon işlemi ortalama 1 gün sürmektedir. Hattınızı teslim aldıktan sonra yaklaşık 1 gün içinde kullanmaya başlayabilirsiniz.",
      },
      {
        key: 13,

        title: "Teslimat esnasında yanımda hangi evrakları bulundurmalıyım?",
        text: "Teslimat sırasında yanınızda kimlik belgenizi ve son 2 aya ait herhangi bir adres gösterir belgeyi (fatura, ikametgah belgesi vs.) hazır bulundurmanız gerekmektedir.",
      },
      {
        key: 14,

        title:
          "Teslimat adresimi talebimi oluşturduktan sonra değiştirebilir miyim?",
        text: "Talebinizi oluşturduktan sonra çağrı merkezimiz tarafından evrak ve SIM kart teslimatı yapılacak adresinizin teyidi için aranacaksınız. Bu görüşme esnasında teslimat adresinizi güncelleyebilirsiniz.",
      },
    ],
  },
  {
    firstArea: [
      {
        key: 15,

        title:
          "Vodafone'un dijital kanallarından (Yanımda veya Vodafone.com.tr) başvuru yaptığımda herhangi bir kurye ya da başvuru ücreti öder miyim?",
        text: "Hayır, dijitalden yaptığınız başvurular tamamen ücretsizdir; ayrıca hattınız adresinize ücretsiz teslim edilir. Vergiler hakkında detaylı bilgi almak için lütfen tıklayınız.",
      },
      {
        key: 16,

        title: "Teslimatım ne kadar sürede gerçekleşir?",
        text: "Sitemizde belirtilen ilçelerden birinde oturuyorsanız 24 saat içinde, başka bir ilçede ikamet ediyorsanız ise 2-4 gün içerisinde hattınızı size teslim edeceğiz.",
      },
      {
        key: 17,

        title: "Evraklarımı nasıl teslim alacağım?",
        text: "Hattınıza dair evraklar, hattın teslimatını gerçekleştirecek kurye elemanı tarafından getirilecektir. Hattınızı teslim aldığınızda evrakları imzalayarak işlemlerinizi kolayca tamamlayabilirsiniz.",
      },
    ],
    secondArea: [
      {
        key: 18,

        title: "Online’a Özel Avantajlar nelerdir?",
        text: "Vodafone’un dijital kanallarından yaptığınız başvurularda birçok tarifeye özel ilk 3 ay %15’e varan indirime sahip olacaksınız. Tüm tarifeleri incelemek için tıklayınız.",
      },
      {
        key: 19,

        title: "Tıkla Gel Al nedir?",
        text: "Başvurunuz sırasında Tıkla Gel Al yöntemini seçerek, SIM kartınızı dilediğiniz herhangi bir Vodafone Mağazasından hızlıca teslim alabilirsiniz. Mağazaya gittiğinizde işleminizin tamamlanabilmesi için size gönderilen bilgilendirme SMS'inde yer alan başvuru numaranızı ya da TC kimlik numaranızı mağaza çalışanına vermeniz yeterlidir. Başvurunuzun geçerlilik süresi 10 gündür, İlk 3 gün içerisinde dilediğiniz mağazamızı ziyaret ederek sim kartınızı teslim alabilirsiniz. 3 günün sonunda hattınız adresinize teslim edilmek üzere kuryeye yönlendirilecektir. Size en yakın Vodafone Mağazalarını incelemek için tıklayınız.",
      },
      {
        key: 20,

        title: "Tıkla Gel Al nedir?",
        text: "Sitemizde belirtilen ilçelerden birinde oturuyorsanız 24 saat içinde, başka bir ilçede ikamet ediyorsanız ise 2-4 gün içerisinde hattınızı size teslim edeceğiz.",
      },
    ],
  },
  {
    firstArea: [
      {
        key: 21,

        title: "Yeni Hat başvuru süreci nasıl işliyor?",
        text: "Yeni hat başvuru işlemini yerinizden kalkmadan, hızlı ve kolay bir şekilde gerçekleştirmek için, bu bağlantıya tarifenizi seçin, Yeni Hat Al’a tıklayın sonrasında numaranızı seçin ve tıklayarak tarifenizi kolayca belirleyin, 'Yeni Hat Al' seçeneğine tıklayın, telefon numaranızı seçin ve bilgilerinizi doldurun. Ardından başvurunuzu doğrulamak ve randevu almak için sizi arayacağız. SIM kartınız, belirteceğiniz tarihte ücretsiz olarak adresinize iletilecektir. Dilerseniz başvurunuz esnasında 'Vodafone Mağazası'ndan Alacağım' seçeneğini seçerek herhangi bir mağazamızı ziyaret edip, aktivasyon işlemlerinizi gerçekleştirerek de sim kartınızı teslim alabilirsiniz.",
      },
      {
        key: 22,

        title:
          "Halihazırda başka bir Vodafone hattım var yeni hat alabilir miyim?",
        text: "Evet, alabilirsiniz.",
      },
      {
        key: 23,

        title:
          "Benim adıma kayıtlı başka bir hattım var. Yeni hat alabilir miyim?",
        text: "Üzerinize kayıtlı olan hat sayısı 10’dan az ise tarifeler sayfasından tarifenizi seçip yeni hat alabilirsiniz.",
      },
      {
        key: 24,

        title: "Teslimatım ne kadar sürede gerçekleşir?",
        text: "Sitemizde belirtilen ilçelerden birinde oturuyorsanız 24 saat içinde, başka bir ilçede ikamet ediyorsanız ise 2-4 gün içerisinde hattınızı size teslim edeceğiz.",
      },
    ],
    secondArea: [
      {
        key: 25,

        title:
          "Vodafone'un dijital kanallarından (Yanımda veya Vodafone.com.tr) başvuru yaptığımda herhangi bir kurye ya da başvuru ücreti öder miyim?",
        text: "Hayır, dijitalden yaptığınız başvurular tamamen ücretsizdir; ayrıca hattınız adresinize ücretsiz teslim edilir. Vergiler hakkında detaylı bilgi almak için lütfen tıklayınız.",
      },
      {
        key: 26,

        title: "Yeni hattımı kullanmaya ne zaman başlayabilirim?",
        text: "Yeni satın alınan hatlarda aktivasyon işlemi ortalama 1 gün sürmektedir. Hattınızı teslim aldıktan sonra yaklaşık 1 gün içinde kullanmaya başlayabilirsiniz.",
      },
      {
        key: 27,

        title: "Teslimat esnasında yanımda hangi evrakları bulundurmalıyım?",
        text: "Teslimat sırasında yanınızda kimlik belgenizi ve son 2 aya ait herhangi bir adres gösterir belgeyi (fatura, ikametgah belgesi vs.) hazır bulundurmanız gerekmektedir.",
      },
      {
        key: 28,

        title:
          "Teslimat adresimi talebimi oluşturduktan sonra değiştirebilir miyim?",
        text: "Talebinizi oluşturduktan sonra çağrı merkezimiz tarafından evrak ve SIM kart teslimatı yapılacak adresinizin teyidi için aranacaksınız. Bu görüşme esnasında teslimat adresinizi güncelleyebilirsiniz.",
      },
    ],
  },
];

import { Typography } from '@mui/material';
import React, { useRef, useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import AfinneTransforms from '../afinne-transforms.jpg'
import GreyStones from '../grey-stones.jpg'
import MandelbrotSet from '../mandelbrot-set.jpg'
import Divider from '../components/Divider';

const RoundSection = ({imgSrc, header, text, handleClick}) => {
  return (
    <div 
      className='zoom' 
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
      onClick={handleClick}
    >
        <div className='shadow'>
          <img
            style={{
              borderRadius: '50%',
              border: '22px black solid', 
              width: '320px',
              height: '320px',
              objectFit: 'cover'
            }}
            src={imgSrc} 
            alt={'alt'}
          />
          <Typography
            className='title'
            color={'white'} 
            fontFamily={'Montserrat'} 
            style={{
              position: 'absolute',
              bottom: 140,
              left: 115,
              fontFamily: 'Montserrat',
              fontSize: '30px',
              lineHeight: '36px',
              fontWeight: '400',
            }}
          >
            GOTO
          </Typography>
        </div>
        <Typography
          color={'white'} 
          fontFamily={'Montserrat'} 
          style={{
            fontFamily: 'Montserrat',
            fontSize: '30px',
            lineHeight: '36px',
            fontWeight: '600',
            marginBottom: '23px'
          }}
        >
          {header}
        </Typography>
        {text}
    </div>
  )
}

const FractalContentSection = React.forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: '50px'
      }}
    >
      <Typography
        color={'white'} 
        fontFamily={'Montserrat'} 
        style={{
          fontFamily: 'Montserrat',
          fontSize: '30px',
          lineHeight: '36px',
          fontWeight: '600',
          marginBottom: '23px'
        }}
      >
        ФРАКТАЛИ
      </Typography>
      <Typography
        color={'white'} 
        fontFamily={'Montserrat'}
        textAlign={'justify'}
        style={{
          fontFamily: 'Montserrat',
          fontSize: '18px',
          lineHeight: '30px',
          fontWeight: '500',
        }}
      >
        <strong>Фрактал</strong> - це геометричний об'єкт, який можна розділити на частини, кожна схожа на вихідний об'єкт.&nbsp;
        Фрактали мають нескінченну кількість деталей і часто самоподібні та масштабовані. у багатьох випадках фрактали вони можуть бути створені
        за допомогою повторюваних шаблонів, рекурсивних або ітераційних процесів.&nbsp;
        Основними властивостями, які характеризують фрактали, є самоподібність, нескінченна складність і розмірність.
        <br/><br/>
        <strong>Самоподібність</strong> — це коли частина фігури або контуру можна розглядати як копію цілого в меншому масштабі.
        <br/>
        <strong>Нескінченна складність</strong> - процес формування графіка є рекурсивним.
        Це означає, що коли процедура виконується, сама раніше виконана процедура виявляється підпроцедурою в її процедурі.
        Варто зазначити, що у випадку ітераційної побудови математично визначеного фрактала програма,&nbsp;
        яка виконується, є нескінченною, що призводить до нескінченно складної структури.
        <br/>
        На відміну від евклідової геометрії, <strong>розмірність фракталів</strong> не обов’язково є цілочисельними значеннями. 
        У цьому розділі математики точки мають нульовий вимір, лінії мають один вимір, поверхні мають два виміри, 
        а об’єми мають три виміри. У випадку фрактальної розмірності це дробова величина, яка представляє, наскільки 
        добре структура займає простір, який її містить.
        <br/><br/>
        Першими вивченими фракталами були <strong>множина Кантора</strong>, <strong>сніжинка Коха</strong> і <strong>трикутник Серпінського</strong>. 
        Фрактали можна отримати геометрично або стохастично за допомогою рекурсивних процесів 
        і можуть набувати характеристик різних типів фігур, які зустрічаються в природі.
        Фрактали існують скрізь. Існує багато природних об’єктів, які вважаються природними фракталами 
        через їхню поведінку або структуру, але це скінченні типи фракталів, що відрізняє їх від фракталів 
        математичного типу, створених рекурсивними взаємодіями. Прикладами таких є хмари та дерева.
        Слово «фрактал» походить від латинського fractus, що означає «роздроблений», «розбитий», або просто «розбитий» чи «розбитий», і добре підходить для об’єктів з дробовими розмірами. Термін був введений Бенуа Мандельбротом у 1977 році і з’явився в його книзі «Фрактальна геометрія природи». Вивчення фрактальних об’єктів часто називають фрактальної геометрією.
        <br/><br/>
        <strong>Фрактал</strong> — це математичний набір, який може насолоджуватися самоподібністю в будь-якому масштабі, і його розміри не є цілими числами, 
        або якби вони були, вони б не були звичайними цілими числами. Той факт, що він самоподібний, означає, що фрактальний об'єкт не залежить 
        від самого спостерігача, тобто якщо взяти якийсь фрактал, ми можемо переконатися, що при подвійному масштабуванні малюнок такий самий, 
        як і на першому. Якщо ми збільшимо масштаб у 1000 разів, ми перевіримо ті самі властивості, тож якщо ми збільшимо n, то графік буде 
        таким же, тож частина подібна до цілого.
        Колекція або об’єкт називають фрактальними, коли вони стають довільно великими, коли зменшується масштаб вимірювального приладу. 
        Існує багато звичайних об’єктів, які вважаються природними завдяки своїй структурі або поведінці. Навіть якщо ми їх не впізнаємо. 
        Хмари, гори, узбережжя, дерева та річки — все це природні фрактали, хоча й кінцеві, а отже, не ідеальні, на відміну від математичних 
        фракталів, які насолоджуються нескінченністю та є ідеальними.
      </Typography>
    </div>
  )
});

const ColorsContentSection = React.forwardRef((prop, ref) => {
  return (
    <div
      ref={ref}
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: '50px'
      }}
    >
      <Typography
        color={'white'} 
        fontFamily={'Montserrat'} 
        style={{
          fontFamily: 'Montserrat',
          fontSize: '30px',
          lineHeight: '36px',
          fontWeight: '600',
          marginBottom: '23px'
        }}
      >
        КОЛІРНІ МОДЕЛІ
      </Typography>
      <Typography
        color={'white'} 
        fontFamily={'Montserrat'}
        textAlign={'justify'}
        style={{
          fontFamily: 'Montserrat',
          fontSize: '18px',
          lineHeight: '30px',
          fontWeight: '500',
        }}
      >
        У комп’ютерній графіці застосовуються три колірні моделі: <strong>RGB, CMYK і HSB.</strong>
        <br/><br/>
        <strong>RGB</strong> (скорочено від англ. Red, Green, Blue — червоний, зелений, синій) — колірна модель, що описує спосіб синтезу кольору, 
        за якою червоне, зелене та синє світло накладаються разом, змішуючись у різноманітні кольори.
        <br/>Це найпростіша для розуміння і очевидна модель. У цій моделі працюють монітори, побутові телевізори, проектори — усюди, 
        де кольорове зображення розглядають у світлі, що проходить. Вважають також, що при додаванні складових яскравість сумарного 
        кольору збільшується. Поєднання трьох складових дає нейтральний колір (сірий), який при великій яскравості прагне до білого кольору. 
        Цю модель застосовують завжди, коли готують зображення, призначене для відтворення на екрані. Якщо зображення проходить комп'ютерну 
        опрацювання у графічному редакторові, то його теж потрібно подавати в цій моделі.
        <br/><br/>
        <strong>Колірна модель CMYK</strong> відповідає малюванню фарбами на паперовому аркуші і використовується при роботі 
        з відбитим кольором, тобто, для підготовки друкованих документів.
        У цій моделі використовуються кольори: блакитний (Cyan), ліловий (Magenta), жовтий (Yellow) і чорний (Black).
        <br/>Ці кольори виходять в результаті віднімання з білого кольору основних кольорів моделі RGB. Чорний колір задається окремо. 
        При збільшенні кількості фарби зменшується яскравість кольору. В друкарнях кольорові зображення друкують в декілька кроків. 
        Накладаючи на папір по черзі блакитний, бузковий, жовтий і чорний відбитки, отримують повноколірну ілюстрацію. 
        Тому готове зображення, отримане на комп'ютері, перед друком розділяють на чотири складові одноколірні зображення. 
        Цей процес називають поділом кольору. Сучасні графічні редактори мають засоби для виконання цієї операції.
        <br/><br/>
        <strong>Модель HSB</strong> найбільш зручна для людини, так як вона добре узгоджується з моделлю сприйняття кольору людиною.
        <br/>Компонентами моделі HSB є:&nbsp;
        <strong>тон (Hue)</strong> — конкретний відтінок: червоний, жовтий, зелений, пурпурний і т.п;&nbsp;
        <strong>насиченість (Saturation)</strong> — характеризує інтенсивність або чистоту кольору: зменшуючи насиченість, ми розбавляємо його білим кольором;&nbsp;
        <strong>яскравість кольору (Brightness)</strong> — залежить від кількості чорної фарби, доданої до даного кольором: чим менше чорного кольору, 
        тим більше яскравість кольору. Створюючи власний художній твір, зручно працювати в моделі HSB, а після закінчення роботи його 
        можна перетворити у моделі RGB або CMYK, залежно від того, чи буде воно використовуватися як екранна або друкарська ілюстрація.
      </Typography>
    </div>
  )
});

const  AfinneContentSection = React.forwardRef((props, ref) => {
  return (
    <div 
      ref={ref}
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: '50px'
      }}
    >
      <Typography
        color={'white'} 
        fontFamily={'Montserrat'} 
        style={{
          fontFamily: 'Montserrat',
          fontSize: '30px',
          lineHeight: '36px',
          fontWeight: '600',
          marginBottom: '23px'
        }}
      >
        АФІННІ ПЕРЕТВОРЕННЯ
      </Typography>
      <Typography
        color={'white'} 
        fontFamily={'Montserrat'}
        textAlign={'justify'}
        style={{
          fontFamily: 'Montserrat',
          fontSize: '18px',
          lineHeight: '30px',
          fontWeight: '500',
        }}
      >
        Найбільш часто в комп’ютерній графіці для перетворення об’єктів використовуються, так зване афінне
        перетворення (affine transforma-tions). Перетворення площини (зображення) називається афінним, якщо воно
        взаємно однозначно і відображенням будь-якої прямої є пряма. Взаємно однозначне перетворення переводить
        кожну точку площини (зображення) Р в іншу точку площині (зображення) Р’, таким чином, що кожній точці P
        відповідає якась точка P’. Крім повороту, відображення, стиснення і розтягування (все це підгрупи афінних
        перетворень) геометричних об’єктів, здійснює ще зрушення їх у просторі (іноді кажуть, трансляцію).
        Геометричні фрактали – самі наочні, тому що в них відразу видно самоподібність. Найчастіше фрактали
        викреслюються у вигляді плоского зображення.
        <br/>
        <br/><strong>Вільноафінне перетворення</strong> — афінне перетворення, що не має інваріантних точок.
        <br/><strong>Еквіафінне перетворення</strong> — афінне перетворення, що зберігає площу.
        <br/><strong>Перспективноафінне перетворення</strong> — афінне перетворення, що має принаймні дві інваріантні точки.
        <br/><strong>Центроафінне перетворення</strong> — афінне перетворення, що зберігає початок координат.
      </Typography>
    </div>
  )
});

const GoDown = ({style, handleClick}) => {
  return (
    <div style={style} onClick={handleClick}>
      <svg width="185" height="29" viewBox="0 0 185 29" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="95.9333" height="3.65359" transform="matrix(0.963292 0.268456 -0.522921 0.852381 1.91055 0.0422363)" fill="#D9D9D9"/>
        <rect width="95.9082" height="3.65524" transform="matrix(0.963046 -0.269335 0.52426 0.851558 89.9722 25.8314)" fill="#D9D9D9"/>
      </svg>
    </div>
  )
}


const HomePage = () => {
  const fractalRef = useRef(null);
  const colorsRef = useRef(null);
  const afinneRef = useRef(null);

  const [directed, setDirected] = useState(false);

  useEffect(() => {
    if (directed){
      setDirected(false);
    }
  }, [directed])

  const handleClick = (event, ref) => {
    event.preventDefault();
    ref.current?.scrollIntoView({behavior: 'smooth'});
    setDirected(true)
  };

  return (
    <>
      <NavBar activeTab={0} />
      <div 
        className='bg-black'
          style={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100%',
          minWidth: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '140px'
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <RoundSection
            handleClick={(e) => handleClick(e, fractalRef)}
            imgSrc={MandelbrotSet} 
            header="Фрактали" 
            text={        
              <Typography
                color={'white'} 
                fontFamily={'Montserrat'}
                textAlign='center'
                style={{
                  fontFamily: 'Montserrat',
                  fontSize: '18px',
                  lineHeight: '30px',
                  fontWeight: '500',
                }}
              >
                Побудуйте власний чаруючий<br/>фрактал Мандельброта
              </Typography>
            }
          />
          <Divider isHorizontal={true} color="white" style={{ width: '160px', height: '5px', marginTop: '160px'}}/>
          <RoundSection
            handleClick={(e) => handleClick(e, colorsRef)}
            imgSrc={GreyStones} 
            header="Змінна колірна схема" 
            text={        
              <Typography
                color={'white'} 
                fontFamily={'Montserrat'}
                textAlign='center'
                style={{
                  fontFamily: 'Montserrat',
                  fontSize: '18px',
                  lineHeight: '30px',
                  fontWeight: '500',
                }}
              >
                Змініть світлоту по сірому<br/>кольору, використовуючи<br/>
                моделі CMYK та HSL
              </Typography>
            }
          />
            <Divider isHorizontal={true} color="white" style={{ width: '160px', height: '5px', marginTop: '160px'}}/>
          <RoundSection
            handleClick={(e) => handleClick(e, afinneRef)}
            imgSrc={AfinneTransforms} 
            header="Афінні перетворення" 
            text={        
              <Typography
                color={'white'} 
                fontFamily={'Montserrat'}
                textAlign='center'
                style={{
                  fontFamily: 'Montserrat',
                  fontSize: '18px',
                  lineHeight: '30px',
                  fontWeight: '500',
                }}
              >
                Спостерігайте трансформації<br/>правильного чотирикутника<br/>через афінні перетворення
              </Typography>
            }
          />
        </div>
        <GoDown style={{ position: 'absolute', bottom: 50}} handleClick={e => handleClick(e, fractalRef)} />
      </div>
      <div
        className='bg-black'
        style={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100%',
          minWidth: '100%',
        }}
      >
        <FractalContentSection ref={fractalRef} />
        <ColorsContentSection ref={colorsRef} />
        <AfinneContentSection ref={afinneRef} />
      </div>
    </>
  )
}

export default HomePage;
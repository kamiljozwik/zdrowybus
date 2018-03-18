import React from 'react';
import Infografika from '../../components/landing/Infografika';

const Wstep = () => (
  <section className="landing__wstep">
    <div className="landing__wstep--leftPanel">
      <h2 className="landing__wstep--tytul">Tytułem wstępu</h2>
      <p className="landing__wstep--tresc">
        Podróż, sport, pasja, promocja zdrowego stylu życia, dawanie szczęścia i pomoc innym. Rusza
        ZdrowyBus.pl! Będziemy jeździć po świecie i zarażać pasją do sportu przeprowadzając
        warsztaty, animacje, festyny sportowe. Pokazując przy tym, że zdrowe odżywianie i aktywność
        fizyczna idzie w parze z podróżowaniem!
      </p>

      <h2 className="landing__wstep--tytul">Jak doszło do powstania busa?</h2>
      <p className="landing__wstep--tresc">
        Kończąc studia miałem mnóstwo wolnego czasu, aby przemyśleć życie z szerszej perspektywy.
        Mógłbym tutaj wiele napisać, ale przejdę tylko do kluczowego wniosku/pytania jakie sobie
        zadałem:
      </p>
      <p className="landing__wstep--tresc cytat">
        Dlaczego pracuję 11 miesięcy w roku, aby przez niecały miesiąc spełniać marzenia i być tak
        naprawdę szczęśliwym?
      </p>
      <p className="landing__wstep--tresc cytat">
        Czy nie byłoby lepiej przez 365 dni w roku robić to, co się kocha oraz pomagać innym?
      </p>
      <p className="landing__wstep--tresc">
        Odpowiedź jest prosta: Jasne, że lepiej! A sport i podróże (całe moje życie) są kluczem do
        tego.
      </p>

      <iframe
        className="landing__YT"
        src="https://www.youtube.com/embed/hmXjyOWi6nc?rel=0&amp;showinfo=1"
        frameBorder="0"
        allowFullScreen=""
        title="Film promocyjny ZdrowyBus.pl"
      />

      <h2 className="landing__wstep--tytul">W skrócie</h2>
      <p className="landing__wstep--tresc">
        Chcemy stworzyć zdrowego busa, dzięki któremu będziemy nie tylko spełniać marzenia, ale
        także przekażemy mnóstwo radości, szczęścia i wiedzy innym.
      </p>
      <p className="landing__wstep--tresc">
        Odkryjemy nieznane i z przyjemnością podzielimy się zgromadzonym materiałem.
      </p>
      <p className="landing__wstep--tresc">Chcemy pomagać, oddając się pasji.</p>
      <p className="landing__wstep--tresc">
        Jeśli i Ty chcesz pomóc w niesieniu dobra i być częścią czegoś większego – proszę wesprzyj
        Nasz projekt. Z pewnością będzie to ogromna inwestycja w Marzenia.
      </p>
    </div>
    <Infografika />
  </section>
);

export default Wstep;

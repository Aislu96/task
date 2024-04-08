//Упорядоченный след муравьев марширует по площадке для пикника в парке.
//
// Это выглядит примерно так:
//
// ..ант..ант.ант...ант.ант..ант.ант....ант..ант.ант.ант...муравьи..
// Но вдруг ходит слух, что впереди на земле заметили упавший сэндвич с курицей. Муравьи рвутся вперед! О нет, это муравьиная давка!!
//
// Некоторые из более медленных муравьев растаптываются, а их бедные маленькие муравьиные тела разбиваются на разбросанные кусочки.
//
// В результате кровавая бойня выглядит следующим образом:
//
// ...ант...ант.. нат .ант. т ..ант...ант..ант..ант. муравей .. т
// Сможете ли вы узнать, сколько муравьев умерло?


deadAntCount = function(ants) {
    const ant = /ant/g;

    const left = ants ? ants.replace(' ', '').replace(ant, '-') : '';

    const counts = {'a': 0, 'n': 0, 't': 0};

    for (const part of left) {
        if (part in counts) counts[part] += 1;
    }

    return Math.max(...Object.values(counts));
}


deadAntCount("ant ant ant ant");
deadAntCount(null);
deadAntCount("ant anantt aantnt");
deadAntCount("ant ant .... a nt");
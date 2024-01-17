import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
    {
        title: 'Original blogs',
        Svg: require('@site/static/img/blog.svg').default,
        description: (
            <>
            Read original blogs on topics I'm interested in.
            I blog not only my life but also the trying out random tech I have interest in.
            Many other subjects get blogged about like my recommendations, science, tech, books, and plenty more!
            </>
        ),
    },
    {
        title: 'Guides to life',
        Svg: require('@site/static/img/laptop-open-icon.svg').default,
        description: (
            <>
            Life can get hard, and sometimes you need help.
            I have many guides on my site to many tech related things.
            tech is my life and it should be yours too!
            </>
        ),
    },
    {
        title: 'I use Arch Linux',
        Svg: require('@site/static/img/arch-linux.svg').default,
        description: (
            <>
            I am an active advocate for the linux operating system.
            Not only do I run Arch Linux as a daily driver but this site also runs off an Arch Linux server.
            You could also be using linux open my Arch Linux Guide and get started!
            </>
        ),
    },
];

function Feature({Svg, title, description}) {
    return (
        <div className={clsx('col col--4')}>
        <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
        </div>
        </div>
    );
}

export default function HomepageFeatures() {
    return (
        <section className={styles.features}>
        <div className="container">
        <div className="row">
        {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
        ))}
        </div>
        </div>
        </section>
    );
}

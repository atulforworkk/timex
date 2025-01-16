import { ActionIcon, useMantineColorScheme, useComputedColorScheme } from '@mantine/core';
import React from 'react';
import { IconSun, IconMoon } from '@tabler/icons-react';

type Props = {};

const Card = (props: Props) => {
    const { setColorScheme } = useMantineColorScheme();
    const computedColorScheme = useComputedColorScheme('dark', { getInitialValueInEffect: true });

    const lightIconClass = computedColorScheme === 'light' ? 'visible' : 'hidden';
    const darkIconClass = computedColorScheme === 'dark' ? 'visible' : 'hidden';

    return (
        <div>
            <ActionIcon
                onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
                variant="default"
                size="xl"
                aria-label="Toggle color scheme"
            >
                <IconSun className={lightIconClass} stroke={1.5} />
                <IconMoon className={darkIconClass} stroke={1.5} />
            </ActionIcon>
        </div>
    );
};

export default Card;

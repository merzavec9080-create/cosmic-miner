/**
 * Cosmic Miner — Upgrade System
 */

const UPGRADES = [
    {
        id: 'tap_power',
        name: 'Мощность бура',
        icon: '⛏️',
        description: 'Увеличивает добычу за один тап',
        basePrice: 50,
        priceMultiplier: 1.8,
        effect: (level) => level + 1,
        effectLabel: (level) => `+${level + 1} за тап → +${level + 2} за тап`,
    },
    {
        id: 'energy_max',
        name: 'Ёмкость батареи',
        icon: '🔋',
        description: 'Увеличивает максимум энергии',
        basePrice: 100,
        priceMultiplier: 1.6,
        effect: (level) => 1000 + level * 500,
        effectLabel: (level) => `${1000 + level * 500} → ${1000 + (level + 1) * 500} ⚡`,
    },
    {
        id: 'energy_regen',
        name: 'Скорость заряда',
        icon: '⚡',
        description: 'Быстрее восстанавливает энергию',
        basePrice: 150,
        priceMultiplier: 2.0,
        effect: (level) => 1 + level,
        effectLabel: (level) => `${1 + level}/сек → ${2 + level}/сек`,
    },
    {
        id: 'multi_tap',
        name: 'Мульти-тап',
        icon: '🎯',
        description: 'Шанс удвоить добычу за тап',
        basePrice: 300,
        priceMultiplier: 2.2,
        effect: (level) => Math.min(level * 5, 50),
        effectLabel: (level) => `${Math.min(level * 5, 50)}% → ${Math.min((level + 1) * 5, 50)}% шанс x2`,
    },
    {
        id: 'offline_income',
        name: 'Авто-буры',
        icon: '🤖',
        description: 'Пассивный доход даже когда не играешь',
        basePrice: 500,
        priceMultiplier: 2.5,
        effect: (level) => level * 2,
        effectLabel: (level) => `${level * 2}/мин → ${(level + 1) * 2}/мин (офлайн)`,
    },
    {
        id: 'lucky_crystal',
        name: 'Счастливый кристалл',
        icon: '💎',
        description: 'Шанс найти редкий кристалл (x10 монет)',
        basePrice: 1000,
        priceMultiplier: 2.8,
        effect: (level) => Math.min(level * 2, 20),
        effectLabel: (level) => `${Math.min(level * 2, 20)}% → ${Math.min((level + 1) * 2, 20)}% шанс x10`,
    },
];

function getUpgradePrice(upgrade, level) {
    return Math.floor(upgrade.basePrice * Math.pow(upgrade.priceMultiplier, level));
}

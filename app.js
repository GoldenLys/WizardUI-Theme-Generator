const GLOBALS = {
    VERSION: '1.84',
    labels: ['0%', '5%', '10%', '15%', '20%', '25%', '30%', '35%', '40%', '45%', '50%', '55%', '60%', '65%', '70%', '75%', '80%', '85%', '90%', '95%', '100%'],
    addons: {
        purpleServerList: {
            name: 'Purple Server List',
            id: 'PurpleServerList',
            description: 'Move the servers to the top with an horizontal width.',
            url: 'https://goldenlys.github.io/WizardUI/addons/PurpleServerList.css',
        },

        lettersInPSL: {
            name: 'Letters in PSL',
            id: 'LettersInPSL',
            description: 'This is a modification for PurpleServerList which replaces the folders icons with letters.',
            required: ["PurpleServerList"],
            url: 'https://goldenlys.github.io/WizardUI/addons/LettersInPSL.css',
        },

        alternateFoldersInPSL: {
            name: 'Alternate Folders in PSL',
            id: 'AlternateFoldersInPSL',
            description: 'This addon modifies the view of closed folders in PurpleServerList, to make it show the 4 servers inside a folder in a 2x2 grid, this is also compatible with the Letters In PSL addon.',
            required: ["PurpleServerList"],
            url: 'https://goldenlys.github.io/WizardUI/addons/AlternateFoldersInPSL.css',
        },

        hoverMembers: {
            name: 'Hover Members',
            id: 'HoverMembers',
            description: ' This will make the members list stay hidden until you hover it.',
            url: 'https://goldenlys.github.io/WizardUI/addons/HoverMembers.css',
        },

        userIsTyping: {
            name: 'User is Typing',
            id: 'UserIsTyping',
            description: 'This will move the "user is typing" text to the bottom of the app, like the default discord.',
            url: 'https://goldenlys.github.io/WizardUI/addons/UserIsTyping.css',
        },
        uniqueGroupsIcons: {
            name: 'Unique Servers Groups Icons',
            id: 'UniqueGroupsIcons',
            description: 'This is an addon that adds unique emojis/icons for the server groups, full list of icons is available on the discord server.',
            url: 'https://goldenlys.github.io/WizardUI/addons/UniqueGroupsIcons.css',
        },
    },
    fonts: {
        quicksand: {
            name: 'Quicksand',
            url: 'https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap',
        },

        roboto: {
            name: 'Roboto',
            url: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap',
        },

        montserrat: {
            name: 'Montserrat',
            url: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap',
        },

        openSans: {
            name: 'Open Sans',
            url: 'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap',
        },

        sourseSansPro: {
            name: 'Source Sans Pro',
            url: 'https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@100;200;300;400;500;600;700;800;900&display=swap',
        },

        marianne: {
            name: 'Marianne',
            url: 'https://goldenlys.github.io/WizardUI/addons/Marianne.css',
        },

        montserrat: {
            name: 'Montserrat',
            url: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap',
        },

        shareTechMono: {
            name: 'Share Tech Mono',
            url: 'https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap',
        },

        bedstead: {
            name: 'Bedstead',
            url: 'https://goldenlys.github.io/WizardUI/addons/Bedstead.css',
        },

        inter: {
            name: 'Inter',
            url: 'https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap',
        },

        minecraft: {
            name: 'Minecraft',
            url: 'https://goldenlys.github.io/WizardUI/addons/Minecraft.css',
        },
    },
    backgrounds: {
        nebula: {
            name: 'Space (Default)',
            url: 'https://goldenlys.github.io/WizardUI/images/backgrounds/nebula.jpg',
        },
        nebula2: {
            name: 'Space 2',
            url: 'https://goldenlys.github.io/WizardUI/images/backgrounds/nebula2.jpg',
        },
        nebula3: {
            name: 'Space 3',
            url: 'https://goldenlys.github.io/WizardUI/images/backgrounds/nebula3.jpg',
        },
        old_elysia: {
            name: 'Elysia (first version)',
            url: 'https://goldenlys.github.io/WizardUI/images/backgrounds/old-elysia.jpg',
        },
        elysia: {
            name: 'Elysia (latest version)',
            url: 'https://goldenlys.github.io/WizardUI/images/backgrounds/elysia.jpg',
        },
        space: {
            name: 'Space 4',
            url: 'https://goldenlys.github.io/WizardUI/images/backgrounds/space.jpg',
        },
        space2: {
            name: 'Space 5',
            url: 'https://goldenlys.github.io/WizardUI/images/backgrounds/space2.jpg',
        },
        clouds: {
            name: 'Space Clouds',
            url: 'https://goldenlys.github.io/WizardUI/images/backgrounds/clouds.png',
        },
        umbrella: {
            name: 'Umbrella Corporation',
            url: 'https://goldenlys.github.io/WizardUI/images/backgrounds/umbrella.jpg',
        },
        outrun: {
            name: 'OutRun',
            url: 'https://goldenlys.github.io/WizardUI/images/backgrounds/OutRun.jpg',
        },
        bos: {
            name: 'Fallout - BOS',
            url: 'https://goldenlys.github.io/WizardUI/images/backgrounds/bos.jpg',
        },
        bos2: {
            name: 'Fallout - BOS 2',
            url: 'https://goldenlys.github.io/WizardUI/images/backgrounds/bos2.jpg',
        },
        destiny: {
            name: 'Destiny',
            url: 'https://goldenlys.github.io/WizardUI/images/backgrounds/destiny.jpg',
        },
        eldenring: {
            name: 'Elden Ring',
            url: 'https://goldenlys.github.io/WizardUI/images/backgrounds/EldenRing.jpg',
        },
        fallout: {
            name: 'Fallout',
            url: 'https://goldenlys.github.io/WizardUI/images/backgrounds/fallout.jpg',
        },
        ggo: {
            name: 'GGO',
            url: 'https://goldenlys.github.io/WizardUI/images/backgrounds/GGO.jpg',
        },
        jedi: {
            name: 'Jedi Survivor',
            url: 'https://goldenlys.github.io/WizardUI/images/backgrounds/JediSurvivor.jpg',
        },
        mw3: {
            name: 'MW3',
            url: 'https://goldenlys.github.io/WizardUI/images/backgrounds/MW3.jpg',
        },
        oncehuman: {
            name: 'Once Human',
            url: 'https://goldenlys.github.io/WizardUI/images/backgrounds/Once_Human.jpg',
        },
        starfield: {
            name: 'Starfield',
            url: 'https://goldenlys.github.io/WizardUI/images/backgrounds/Starfield.jpg',
        },
        gta6: {
            name: 'GTA VI',
            url: 'https://goldenlys.github.io/WizardUI/images/backgrounds/gta6.jpg',
        }
    },
    logos: {
        1: {
            name: 'Home',
            url: 'https://goldenlys.github.io/WizardUI/images/logos/2.png',
        },
        2: {
            name: 'Elysia (Animated)',
            url: 'https://goldenlys.github.io/WizardUI/images/logos/1.gif',
        },
        3: {
            name: 'Nebulys',
            url: 'https://goldenlys.github.io/WizardUI/images/logos/3.gif',
        },
        4: {
            name: 'BetterDiscord',
            url: 'https://goldenlys.github.io/WizardUI/images/logos/4png',
        },
        5: {
            name: 'REverse',
            url: 'https://goldenlys.github.io/WizardUI/images/logos/5.png',
        },
        6: {
            name: 'Messaging App',
            url: 'https://goldenlys.github.io/WizardUI/images/logos/6.png',
        },
        7: {
            name: 'Elysia (Symbol)',
            url: 'https://goldenlys.github.io/WizardUI/images/logos/7.png',
        },
        8: {
            name: 'Destiny: Ghost',
            url: 'https://goldenlys.github.io/WizardUI/images/logos/8.gif',
        },
        9: {
            name: 'ProHub',
            url: 'https://goldenlys.github.io/WizardUI/images/logos/9.png',
        },
        10: {
            name: 'Sunset',
            url: 'https://goldenlys.github.io/WizardUI/images/logos/10.png',
        },
        11: {
            name: 'Green Discord',
            url: 'https://goldenlys.github.io/WizardUI/images/logos/11.png',
        },
        12: {
            name: 'Angry Discord',
            url: 'https://goldenlys.github.io/WizardUI/images/logos/12.png',
        },
        13: {
            name: 'Default Discord',
            url: 'https://goldenlys.github.io/WizardUI/images/logos/13.png',
        },
        14: {
            name: 'Blue Discord',
            url: 'https://goldenlys.github.io/WizardUI/images/logos/14.png',
        },
        15: {
            name: 'Red Discord',
            url: 'https://goldenlys.github.io/WizardUI/images/logos/15.png',
        },
        16: {
            name: 'Colorful Discord',
            url: 'https://goldenlys.github.io/WizardUI/images/logos/16.gif',
        },
        17: {
            name: 'Glitched Discord',
            url: 'https://goldenlys.github.io/WizardUI/images/logos/17.gif',
        },
        18: {
            name: 'Stargate: Earth Symbol',
            url: 'https://goldenlys.github.io/WizardUI/images/logos/18.png',
        },
        19: {
            name: 'Starfield: Constellation',
            url: 'https://goldenlys.github.io/WizardUI/images/logos/19.jpg',
        },
        20: {
            name: 'MW3',
            url: 'https://goldenlys.github.io/WizardUI/images/logos/20.jpg',
        },
        21: {
            name: 'Umbrella Corporation',
            url: 'https://goldenlys.github.io/WizardUI/images/logos/21.png',
        },
        22: {
            name: 'Fallout: Enclave',
            url: 'https://goldenlys.github.io/WizardUI/images/logos/22.png',
        },
        23: {
            name: 'Fallout: Brotherhood of Steel',
            url: 'https://goldenlys.github.io/WizardUI/images/logos/23.png',
        },
        24: {
            name: 'Fallout: RobCo Industries',
            url: 'https://goldenlys.github.io/WizardUI/images/logos/24.png',
        },
        25: {
            name: 'Jedi Order',
            url: 'https://goldenlys.github.io/WizardUI/images/logos/25.jpg',
        },
        26: {
            name: 'Once Human',
            url: 'https://goldenlys.github.io/WizardUI/images/logos/26.png',
        },
        27: {
            name: 'Elden Ring',
            url: 'https://goldenlys.github.io/WizardUI/images/logos/27.jpg',
        },
        28: {
            name: 'GTA VI',
            url: 'https://goldenlys.github.io/WizardUI/images/logos/28.png',
        },
    }
};

var CONFIG = {
    background_type: 'image',
    logo_type: 'image',
    link_color_type: 'default',
    pill_color_type: 'default',
    folders_color_type: 'default',
    EMB_2_type: 'image',
    EMB_3_type: 'image',
    EMB_4_type: 'image',
    EMB_5_type: 'image',
    EMB_6_type: 'image',
    EMB_7_type: 'image',
    EMB_8_type: 'image',
    EMB_9_type: 'image',
    EMB_10_type: 'image',
};

function updateFont(font) {
    if (!GLOBALS.fonts[font]) font = 0;
    $('body').css('font-family', GLOBALS.fonts[font].name);
    $('link[href*="fonts.googleapis.com"]').remove();
    if (GLOBALS.fonts[font]) {
        var link = $('<link href="' + GLOBALS.fonts[font].url + '" rel="stylesheet">');
        $('head').append(link);
    }
}

function updateBackgroundType(type) {
    CONFIG.background_type = type;
    let TYPES = { image: "backgroundImage", color: "backgroundColor", custom: "backgroundCustom" };
    for (const type in TYPES) {
        if (type === CONFIG.background_type) {
            $(`#backgroundType .ui.button[data-value="${type}"]`).attr("class", "ui green button");
            $(`#${TYPES[type]}`).show();
        } else {
            $(`#backgroundType .ui.button[data-value="${type}"]`).attr("class", "ui grey button");
            $(`#${TYPES[type]}`).hide();
        }
    }
}

function updateEMBType(id, type) {
    CONFIG[`EMB_${id}_type`] = type;
    let TYPES = { image: `EMB_${id}_Image`, color: `EMB_${id}_Color`, custom: `EMB_${id}_Custom` };
    for (const type in TYPES) {
        if (type === CONFIG[`EMB_${id}_type`]) {
            $(`#EMB_${id}_Type .ui.button[data-value="${type}"]`).attr("class", "ui green button");
            $(`#${TYPES[type]}`).show();
        } else {
            $(`#EMB_${id}_Type .ui.button[data-value="${type}"]`).attr("class", "ui grey button");
            $(`#${TYPES[type]}`).hide();
        }
    }
}

function updateBackground(background) {
    if (CONFIG.background_type === 'image') {
        $('.background').css('background-image', 'url(' + GLOBALS.backgrounds[background].url + ')');
        $('.background').css('background-color', 'unset');
    } else if (CONFIG.background_type === 'color') {
        $('.background').css('background-color', $('#backgroundColor').val());
        $('.background').css('background-image', 'none');
    } else {
        $('.background').css('background-image', 'url(' + $('#backgroundCustomUrl').val() + ')');
        $('.background').css('background-color', 'unset');
    }
}

function updateLogoType(type) {
    CONFIG.logo_type = type;
    let TYPES = { image: "LogoImage", custom: "LogoCustom" };
    for (const type in TYPES) {
        if (type === CONFIG.logo_type) {
            $(`#logoType .ui.button[data-value="${type}"]`).attr("class", "ui green button");
            $(`#${TYPES[type]}`).show();
        } else {
            $(`#logoType .ui.button[data-value="${type}"]`).attr("class", "ui grey button");
            $(`#${TYPES[type]}`).hide();
        }
    }
}

function updateLogo(logo) {
    if (CONFIG.logo_type === 'image') {
        $('#logo').attr('src', GLOBALS.logos[logo].url);
    } else {
        $('#logo').attr('src', $('#LogoCustomUrl').val());
    }
}

function updateLinkType(type) {
    CONFIG.link_color_type = type;
    let TYPES = { default: "Link-Default-Color", custom: "Link-Custom-Color" };
    for (const type in TYPES) {
        if (type === CONFIG.link_color_type) {
            $(`#linkColorType .ui.button[data-value="${type}"]`).attr("class", "ui green button");
            $(`#${TYPES[type]}`).show();
        } else {
            $(`#linkColorType .ui.button[data-value="${type}"]`).attr("class", "ui grey button");
            $(`#${TYPES[type]}`).hide();
        }
    }
}

function updatePillType(type) {
    CONFIG.pill_color_type = type;
    let TYPES = { default: "Pill-Default-Color", custom: "Pill-Custom-Color" };
    for (const type in TYPES) {
        if (type === CONFIG.pill_color_type) {
            $(`#pillColorType .ui.button[data-value="${type}"]`).attr("class", "ui green button");
            $(`#${TYPES[type]}`).show();
        } else {
            $(`#pillColorType .ui.button[data-value="${type}"]`).attr("class", "ui grey button");
            $(`#${TYPES[type]}`).hide();
        }
    }
}

function updateFoldersType(type) {
    CONFIG.folders_color_type = type;
    let TYPES = { default: "Servers-Default-Color", custom: "Servers-Custom-Color" };
    for (const type in TYPES) {
        if (type === CONFIG.folders_color_type) {
            $(`#serversColorType .ui.button[data-value="${type}"]`).attr("class", "ui green button");
            $(`#${TYPES[type]}`).show();
        } else {
            $(`#serversColorType .ui.button[data-value="${type}"]`).attr("class", "ui grey button");
            $(`#${TYPES[type]}`).hide();
        }
    }
}

function separateColorAndOpacity(hexColor) {
    hexColor = hexColor.replace('#', '');
    if (hexColor.length < 8) hexColor = hexColor.padEnd(8, 'FF'); 
    // Extract the color code and opacity
    const colorCode = hexColor.slice(0, -2);
    const opacity = hexColor.slice(-2);

    // Convert the opacity from hex to decimal
    const opacityDecimal = (parseInt(opacity, 16) / 255) * 100;

    return {
        colorCode: "#" + colorCode,
        opacity: Math.round(opacityDecimal)/100
    };
}

function decimalToHexTransparency(decimalTransparency, hexColor) {
    const hexTransparency = Math.round(decimalTransparency * 255).toString(16).padStart(2, '0');
    return `${hexColor}${hexTransparency}`;
}

function download() {
    const outputDiv = document.getElementById('output');
    const preElement = outputDiv.querySelector('pre');
    const cssText = preElement.textContent;
    const themeName = $('#themeName').val().replace(/[^a-zA-Z0-9_-]/g, '_');

    const blob = new Blob([cssText], { type: 'text/css' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = themeName + '.theme.css';
    a.click();
    URL.revokeObjectURL(url);
}

function Initialize_Slider(id, min, max, start, step, tooltip, labels, adjustable) {
    adjustable = adjustable || false;
    $('#' + id).slider({
        min: min,
        max: max,
        start: start,
        step: step,
        autoAdjustLabels: adjustable,
        showThumbTooltip: tooltip
    });
    if (labels) $('#' + id + ' .auto.labels li.label').each(function (index) { $(this).text(GLOBALS.labels[index]); });
}

function importTheme() {
    const fileInput = document.getElementById('themeImporter');
    const file = fileInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = () => {
            const cssContent = reader.result;
            const { themeInfo, themeVariables, themeAddons } = extractThemeData(cssContent);
            const processedTheme = processTheme(themeVariables);
            //console.table(themeAddons);
            //console.table("Raw: " + JSON.stringify(themeVariables));
            console.table(processedTheme);
            INITIALIZE();
            applyTheme(themeInfo, processedTheme, themeAddons);
        };
        reader.readAsText(file);
    }
}

function extractThemeData(cssContent) {
    let themeInfo = {};
    let themeVariables = {};
    let themeAddons = [];

    let lines = cssContent.split('\n');
    let inComment = false;
    lines.forEach((line) => {
        if (line.trim().startsWith('/*')) {
            inComment = true;
        } else if (line.trim().endsWith('*/')) {
            inComment = false;
        } else if (!inComment && line.trim().match(/@import\s+url\("([^"]+)"/)) {
            const url = line.trim().match(/@import\s+url\("([^"]+)"/)[1];
            for (const addon in GLOBALS.addons) {
                if (GLOBALS.addons[addon].url === url) {
                    themeAddons[addon] = true;
                }
            }
            const evenMoreColorsMatch = url.match(/EvenMoreColors\/(\d+)\.css$/);
            if (evenMoreColorsMatch) {
                const amount = parseInt(evenMoreColorsMatch[1], 10);
                themeAddons['EvenMoreColors'] = amount;
            }
            const evenMoreBackgroundsMatch = url.match(/EvenMoreBackgrounds\/(\d+)\.css$/);
            if (evenMoreBackgroundsMatch) {
                const amount = parseInt(evenMoreBackgroundsMatch[1], 10);
                if (!isNaN(amount)) themeAddons['EvenMoreBackgrounds'] = amount;
            }
        }
    });

    const commentBlock = cssContent.match(/\/\*\*([\s\S]*?)\*\//);
    if (commentBlock) {
        const lines = commentBlock[1].trim().split('\n');
        lines.forEach((line) => {
            const match = line.match(/@name\s*(.*)/);
            if (match) {
                themeInfo.name = match[1].trim();
            }
        });
    }

    const rootBlock = cssContent.match(/:root\s*{([\s\S]*?)}/);
    if (rootBlock) {
        const lines = rootBlock[1].trim().split(';');
        lines.forEach((line) => {
            const match = line.match(/--([^:]+):\s*(.*)/);
            if (match) {
                themeVariables[`--${match[1]}`] = match[2].trim();
            }
        });
    }

    return { themeInfo, themeVariables, themeAddons };
}

function processTheme(themeVariables) {
    const processedTheme = {};
    Object.keys(themeVariables).forEach(key => {
        let value = themeVariables[key];

        if (typeof value === 'string') {
            // String processing
            //console.log("TYPE 0: " + key + " | " + value);
            value = value.replace(/['"]/g, '');
        } 

        if (key === '--font') {
            // Font processing
            //console.log("TYPE 1: " + key + " | " + value);
            value = value.replace(/, emoji, monospace/, '');
            value = value.replace(/, emoji, sans-serif/, '');
            value = value.replace(/, emoji/, '');
            if (!value || !Object.values(GLOBALS.fonts).some(font => font.name === value)) value = 'Quicksand';
        }

        if (value === 'none' || value === 'flex' || key === '--Watermark') {
            // Toggle processing
            //console.log("TYPE 2: " + key + " | " + value);
            processedTheme[key] = value;

        }

        if (typeof value === 'string' && value.startsWith('url(')) {
            // URL processing
            //console.log("TYPE 3: " + key + " | " + value);
            value = value.slice(4, -1);

        }

        if (typeof value === 'string' && value.startsWith('rgb')) {
            // RGB processing
            //console.log("TYPE 4: " + key + " | " + value);
            const rgb = convertRgbToHex(value);
            processedTheme[key] = [rgb.hex];
            processedTheme[`${key}`].opacity = rgb.opacity;

        }

        value = value.replace(/var\(--([^)]+)\)/g, (match, variableName) => {
            // Variable processing
            //console.log("TYPE 5: " + key + " | " + value);
            if (themeVariables[`--${variableName}`]) {
                return themeVariables[`--${variableName}`];
            }
            return match;
        });
        processedTheme[key] = value;
    });
    return processedTheme;
}

function INIT_BACKGROUND_SELECTOR(element_id) {
    for (const background in GLOBALS.backgrounds) {
        $('#' + element_id).append(`<option value="${background}">${GLOBALS.backgrounds[background].name}</option>`);
    }
}

function convertRgbToHex(rgb) {
    const match = rgb.match(/^rgba?\(\s*(\d+)\s*[\s,\/]*\s*(\d+)\s*[\s,\/]*\s*(\d+)\s*(?:[\s,\/]*\s*(\d+(?:\.\d+)?%?)?)?\s*\)$/i);
    if (match) {
        const r = parseInt(match[1], 10);
        const g = parseInt(match[2], 10);
        const b = parseInt(match[3], 10);
        const a = match[4] ? (match[4].endsWith('%') ? parseFloat(match[4].replace('%', '')) / 100 : parseFloat(match[4])) : 1;
        const hex = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
        return { hex, opacity: a };
    }
    return { hex: rgb, opacity: '100%' };
}

function applyTheme(themeInfo, themeVariables, themeAddons) {
    let elementMap = {
        // General
        '--Watermark': '#watermark',
        '--font': '#fontVariable',
        '--background': '#backgroundCustomUrl',
        '--logo': '#LogoCustomUrl',
        '--sendmessage-text-lines': '#message-lines-slider',

        // Colors
        '--Primary': '#primaryColor',
        '--Text': '#textColor',
        '--text-link': '#textLinkColor',
        '--text-shadow': '#shadowColor',
        '--MessageHover': ['#messageHoverColor', '#messagehover-slider'],
        '--Unread': '#unreadColor',

        // Status
        '--Online': '#OnlineColor',
        '--Idle': '#IdleColor',
        '--Unavailable': '#UnavailableColor',
        '--Offline': '#OfflineColor',
        '--Streaming': '#StreamingColor',

        // UI
        '--grey5': ['#greyColor', '#transparent-color-slider1'],
        '--darkgrey5': ['#darkgreyColor', '#transparent-color-slider2'],
        '--ui-success': '#successColor',
        '--ui-warning': '#warningColor',
        '--ui-error': '#errorColor',
        '--Hover': ['#HoverColor', '#hover-slider'],

        // Backgrounds
        '--bg-titlebar': ['#bg-titlebar', '#bg-titlebar-slider'],
        '--bg-servers': ['#bg-servers', '#bg-servers-slider'],
        '--bg-sendmessage': ['#bg-sendmessage', '#bg-sendmessage-slider'],
        '--bg-ui-elements': ['#bg-ui-elements', '#bg-ui-elements-slider'],
        '--bg-members': ['#bg-members', '#bg-members-slider'],
        '--bg-chat-elements': ['#bg-chat-elements', '#bg-chat-elements-slider'],
        '--bg-user-area': ['#bg-user-area', '#bg-user-area-slider'],
        '--bg-settings': ['#bg-settings', '#bg-settings-slider'],
        '--bg-colorprofile': ['#bg-colorprofile', '#bg-colorprofile-slider'],
        '--bg-alt-message': ['#bg-alt-message', '#bg-alt-message-slider'],

        // RGB
        '--ColorTime': '#rgb-speed-slider',
        '--Color2': '#rgb-color-2',
        '--Color3': '#rgb-color-3',
        '--Color4': '#rgb-color-4',
        '--Color5': '#rgb-color-5',
        '--Color6': '#rgb-color-6',
        '--Color7': '#rgb-color-7',
        '--Color8': '#rgb-color-8',
        '--Color9': '#rgb-color-9',
        '--Color10': '#rgb-color-10',

        // EMB
        '--BackgroundTime': '#emb-speed-slider',
        '--EMB_1': '#EMB_2_CustomUrl',
        '--EMB_2': '#EMB_3_CustomUrl',
        '--EMB_3': '#EMB_4_CustomUrl',
        '--EMB_4': '#EMB_5_CustomUrl',
        '--EMB_5': '#EMB_6_CustomUrl',
        '--EMB_6': '#EMB_7_CustomUrl',
        '--EMB_7': '#EMB_8_CustomUrl',
        '--EMB_8': '#EMB_9_CustomUrl',
        '--EMB_9': '#EMB_10_CustomUrl',

        // Server
        '--ServerSize': '#server-size-slider',
    };

    if (typeof themeVariables['--background'] === 'string' && themeVariables['--background'].startsWith('#')) {
        CONFIG.background_type = 'color';
        elementMap['--background'] = '#backgroundColor';
        updateBackgroundType('color');
    }
    else {
        CONFIG.background_type = 'custom';
        updateBackgroundType('custom');
    }
    CONFIG.logo_type = 'custom';
    updateLogoType('custom');

    $('#themeName').val(themeInfo.name);

    if (themeVariables['--Show_Gift_Button'] == 'flex' || themeVariables['--Show_Gift_Button'] == 'none') $('#showGiftButton').val(themeVariables['--Show_Gift_Button']);
    if (themeVariables['--Show_Sticker_Button'] == 'flex' || themeVariables['--Show_Sticker_Button'] == 'none') $('#showStickerButton').val(themeVariables['--Show_Sticker_Button']);
    if (themeVariables['--Show_Apps_Button'] == 'flex' || themeVariables['--Show_Apps_Button'] == 'none') $('#showAppsButton').val(themeVariables['--Show_Apps_Button']);
    if (themeVariables['--Show_Now_Playing_Tab'] == 'flex' || themeVariables['--Show_Now_Playing_Tab'] == 'none') $('#showNowPlayingTab').val(themeVariables['--Show_Now_Playing_Tab']);
    if (themeVariables['--Show_Category_Visibility_Icon'] == 'flex' || themeVariables['--Show_Category_Visibility_Icon'] == 'none') $('#showCategoryVisibilityIcon').val(themeVariables['--Show_Category_Visibility_Icon']);


    Object.keys(elementMap).forEach(key => {
        const value = themeVariables[key];
        if (key == '--font') {
            let id = 'unknown';

            for (let font in GLOBALS.fonts) {
                if (GLOBALS.fonts[font].name == value) {
                    id = font;
                    break;
                }
            }
            if (id == 'unknown') {
                id = 'Quicksand';
            }
            $('#fontVariable').val(id);
            updateFont($('#fontVariable').val());
        } else if (key == '--ServerSize') {
            $(elementMap[key]).slider('set value', value.replace(/[px]/g, ''));
        
        } else if (key == '--sendmessage-text-lines') {
            $(elementMap[key]).slider('set value', value);
        } else if (key == '--EMB_1' || key == '--EMB_2' || key == '--EMB_3' || key == '--EMB_4' || key == '--EMB_5' || key == '--EMB_6' || key == '--EMB_7' || key == '--EMB_8' || key == '--EMB_9') {
            const embId = parseInt(key.split('_')[1]) + 1;
            updateEMBType(embId, 'custom');
            $(`#EMB_${embId}_CustomUrl`).val(value);
        } else {
            

            if (Array.isArray(elementMap[key])) {
                if (!Array.isArray(value)) { // one value
                    $(elementMap[key][0]).val(separateColorAndOpacity(value).colorCode);
                    $(elementMap[key][1]).slider('set value', separateColorAndOpacity(value).opacity);
                } else { // two values
                    $(elementMap[key][0]).val(value[0]);
                    $(elementMap[key][1]).slider('set value', value[1]);
                }
            } else {
                $(elementMap[key]).val(value);
            }
        }
    });

    for (const addon in GLOBALS.addons) {
        if (themeAddons[addon]) {
            $('#addon-' + GLOBALS.addons[addon].id).prop('checked', true);
        } else {
            $('#addon-' + GLOBALS.addons[addon].id).prop('checked', false);
        }
    }

    if (themeAddons['EvenMoreColors']) {
        $('#addon-EvenMoreColors').val(themeAddons['EvenMoreColors']);
    }

    if (themeAddons['EvenMoreBackgrounds']) {
        $('#addon-EvenMoreBackgrounds').val(themeAddons['EvenMoreBackgrounds']);
    }

    updateLogo(themeVariables['--logo']);
    updateBackground(themeVariables['--background']);
}

function INITIALIZE() {
    // SLIDERS
    Initialize_Slider('transparent-color-slider1', 0, 1.0, 0.75, 0.05, false, true);
    Initialize_Slider('transparent-color-slider2', 0, 1.0, 0.75, 0.05, false, true);
    Initialize_Slider('message-lines-slider', 1, 30, 8, 1, false, false);
    Initialize_Slider('rgb-speed-slider', 1, 180, 5, 1, true, false);
    Initialize_Slider('emb-speed-slider', 0, 3600, 60, 5, true, false);
    Initialize_Slider('messagehover-slider', 0, 1.0, 0.0, 0.05, false, true);
    Initialize_Slider('hover-slider', 0, 1.0, 0.5, 0.05, false, true);
    Initialize_Slider('bg-titlebar-slider', 0, 1.0, 0.65, 0.05, false, true);
    Initialize_Slider('bg-servers-slider', 0, 1.0, 0.65, 0.05, false, true);
    Initialize_Slider('bg-ui-slider', 0, 1.0, 0.65, 0.05, false, true);
    Initialize_Slider('bg-ui-elements-slider', 0, 1.0, 0.65, 0.05, false, true);
    Initialize_Slider('bg-chatbox-slider', 0, 1.0, 0.5, 0.05, false, true);
    Initialize_Slider('bg-sendmessage-slider', 0, 1.0, 0.65, 0.05, false, true);
    Initialize_Slider('bg-members-slider', 0, 1.0, 0.65, 0.05, false, true);
    Initialize_Slider('bg-chat-elements-slider', 0, 1.0, 0.5, 0.05, false, true);
    Initialize_Slider('bg-user-area-slider', 0, 1.0, 0.65, 0.05, false, true);
    Initialize_Slider('bg-settings-slider', 0, 1.0, 0.75, 0.05, false, true);
    Initialize_Slider('bg-colorprofile-slider', 0, 1.0, 0.5, 0.05, false, true);
    Initialize_Slider('bg-alt-message-slider', 0, 1.0, 0.0, 0.05, false, true);
    Initialize_Slider('server-size-slider', 0, 100, 45, 1, true, false, true);

    // BACKGROUNDS
    INIT_BACKGROUND_SELECTOR('backgroundImage');
    INIT_BACKGROUND_SELECTOR('EMB_2_Image');
    INIT_BACKGROUND_SELECTOR('EMB_3_Image');
    INIT_BACKGROUND_SELECTOR('EMB_4_Image');
    INIT_BACKGROUND_SELECTOR('EMB_5_Image');
    INIT_BACKGROUND_SELECTOR('EMB_6_Image');
    INIT_BACKGROUND_SELECTOR('EMB_7_Image');
    INIT_BACKGROUND_SELECTOR('EMB_8_Image');
    INIT_BACKGROUND_SELECTOR('EMB_9_Image');
    INIT_BACKGROUND_SELECTOR('EMB_10_Image');
}

$(document).ready(function () {
    INITIALIZE();

    $('.tabular.menu .item').tab();
    $('.ui.radio.checkbox').checkbox();

    // FONT
    for (const font in GLOBALS.fonts) {
        $('#fontVariable').append(`<option value="${font}">${GLOBALS.fonts[font].name}</option>`);
    }

    $('#fontVariable').on('change', function () {
        updateFont(this.value);
    });
    updateFont($('#fontVariable').val());

    // ADDONS
    for (const addon in GLOBALS.addons) {
        $('#desc-' + GLOBALS.addons[addon].id).html(GLOBALS.addons[addon].description);
    }

    $('#backgroundType').on('click', ".ui.button", function () {
        updateBackgroundType($(this).data('value'));
    });
    updateBackgroundType(CONFIG.background_type);

    $('#EMB_2_Type').on('click', ".ui.button", function () {
        updateEMBType(2, $(this).data('value'));
    });
    updateEMBType(2, CONFIG[`EMB_2_type`]);

    $('#EMB_3_Type').on('click', ".ui.button", function () {
        updateEMBType(3, $(this).data('value'));
    });
    updateEMBType(3, CONFIG[`EMB_3_type`]);

    $('#EMB_4_Type').on('click', ".ui.button", function () {
        updateEMBType(4, $(this).data('value'));
    });
    updateEMBType(4, CONFIG[`EMB_4_type`]);

    $('#EMB_5_Type').on('click', ".ui.button", function () {
        updateEMBType(5, $(this).data('value'));
    });
    updateEMBType(5, CONFIG[`EMB_5_type`]);

    $('#EMB_6_Type').on('click', ".ui.button", function () {
        updateEMBType(6, $(this).data('value'));
    });
    updateEMBType(6, CONFIG[`EMB_6_type`]);

    $('#EMB_7_Type').on('click', ".ui.button", function () {
        updateEMBType(7, $(this).data('value'));
    });
    updateEMBType(7, CONFIG[`EMB_7_type`]);

    $('#EMB_8_Type').on('click', ".ui.button", function () {
        updateEMBType(8, $(this).data('value'));
    });
    updateEMBType(8, CONFIG[`EMB_8_type`]);

    $('#EMB_9_Type').on('click', ".ui.button", function () {
        updateEMBType(9, $(this).data('value'));
    });
    updateEMBType(9, CONFIG[`EMB_9_type`]);

    $('#EMB_10_Type').on('click', ".ui.button", function () {
        updateEMBType(10, $(this).data('value'));
    });
    updateEMBType(10, CONFIG[`EMB_10_type`]);

    $('#backgroundImage').on('change', function () {
        updateBackground(this.value);
    })
    updateBackground($('#backgroundImage').val());

    // LOGO
    for (const logo in GLOBALS.logos) {
        $('#LogoImage').append(`<option value="${logo}">${GLOBALS.logos[logo].name}</option>`);
    }

    $('#logoType').on('click', ".ui.button", function () {
        updateLogoType($(this).data('value'));
    });
    updateLogoType(CONFIG.logo_type);

    $('#pillColorType').on('click', ".ui.button", function () {
        updatePillType($(this).data('value'));
    });
    updatePillType(CONFIG.pill_color_type);

    $('#linkColorType').on('click', ".ui.button", function () {
        updateLinkType($(this).data('value'));
    });
    updateLinkType(CONFIG.link_color_type);

    $('#serversColorType').on('click', ".ui.button", function () {
        updateFoldersType($(this).data('value'));
    });
    updateFoldersType(CONFIG.folders_color_type);

    $('#LogoImage').on('change', function () {
        updateLogo(this.value);
    })
    updateLogo($('#LogoImage').val());

    document.title = `WTG | ${GLOBALS.VERSION}`;
    $('#app-title').html(`WizardUI Theme Generator <div class="sub grey header">v${GLOBALS.VERSION}</div>`);

    $('#generate').on('click', (function (e) {
        e.preventDefault();
        let config = `/**\n* @name ${$('#themeName').val()}\n* @author NEBULYS\n* @authorLink https://github.com/GoldenLys\n* @version ${GLOBALS.VERSION}\n* @invite SBuYeHh\n* @description An amazing modular and fully customizable theme, made with 💖 by NEBULYS.\n* @website https://nebulys.eu/themegen\n*/\n\n`;
        let rounding_values = { 'square': '0px', 'rounded': '5px', 'circle': '50%' };
        config += `@import url("${GLOBALS.fonts[$('#fontVariable').val()].url}");\n\n`;
        config += `@import url("https://goldenlys.github.io/WizardUI/base.css");\n\n`;

        for (const addon in GLOBALS.addons) {
            if ($('#addon-' + GLOBALS.addons[addon].id).is(':checked')) {
                config += `@import url("${GLOBALS.addons[addon].url}"); \n`;
            }
        }

        $('#addon-EvenMoreColors').val() > 0 ? config += `@import url("https://goldenlys.github.io/WizardUI/addons/EvenMoreColors/${$('#addon-EvenMoreColors').val()}.css"); \n` : "";
        $('#addon-EvenMoreBackgrounds').val() > 0 ? config += `@import url("https://goldenlys.github.io/WizardUI/addons/EvenMoreBackgrounds/${$('#addon-EvenMoreBackgrounds').val()}.css"); \n` : "";

        config += `\n:root {`
        config += `\n    /* GENERAL */\n`
        config += `    --Watermark: "${$('#watermark').val()}";\n`
        config += `    --font: "${GLOBALS.fonts[$('#fontVariable').val()].name}", "emoji", sans-serif;\n`

        if (CONFIG.logo_type === 'custom') {
            config += `    --logo: url("${$('#LogoCustomUrl').val()}");\n`;
        } else {
            config += `    --logo: url("${GLOBALS.logos[$('#LogoImage').val()].url}");\n`
        }

        config += `    --sendmessage-text-lines: ${$('#message-lines-slider').slider('get value')};\n`

        config += `\n    /* COLORS */\n`
        config += `    --Primary: ${$('#primaryColor').val()};\n`
        config += `    --Text: ${$('#textColor').val()};\n`
        if (CONFIG.link_color_type === 'custom') {
            config += `    --text-link: ${$('#Link-Custom-Color').val()};\n`;
        } else {
            config += `    --text-link: var(--Primary);\n`;
        }
        config += `    --text-shadow: ${$('#shadowColor').val()};\n`
        config += `    --Highlighted:  ${decimalToHexTransparency(0.5, $('#primaryColor').val())};\n`
        config += `    --MessageHover: ${decimalToHexTransparency($('#messagehover-slider').slider('get value'), $('#messageHoverColor').val())};\n`
        config += `    --Unread: ${$('#unreadColor').val()};\n`

        config += `\n    /* STATUS */\n`
        config += `    --Online: ${$('#OnlineColor').val()};\n`
        config += `    --Idle: ${$('#IdleColor').val()};\n`
        config += `    --Unavailable: ${$('#UnavailableColor').val()};\n`
        config += `    --Offline: ${$('#OfflineColor').val()};\n`
        config += `    --Streaming: ${$('#StreamingColor').val()};\n`

        config += `\n    /* UI */\n`
        config += `    --grey: ${$('#greyColor').val()};\n`
        config += `    --grey5: ${decimalToHexTransparency($('#transparent-color-slider1').slider('get value'), $('#greyColor').val())};\n`
        config += `    --darkgrey: ${$('#darkgreyColor').val()};\n`
        config += `    --darkgrey5: ${decimalToHexTransparency($('#transparent-color-slider2').slider('get value'), $('#darkgreyColor').val())};\n`
        config += `    --ui-success: ${$('#successColor').val()};\n`
        config += `    --ui-warning: ${$('#warningColor').val()};\n`
        config += `    --ui-error: ${$('#errorColor').val()};\n`
        config += `    --Hover: ${decimalToHexTransparency($('#hover-slider').slider('get value'), $('#HoverColor').val())};\n`

        config += `\n    /* BACKGROUNDS */\n`
        config += `    --bg-titlebar: ${decimalToHexTransparency($('#bg-titlebar-slider').slider('get value'), $('#bg-titlebar').val())};\n`
        config += `    --bg-servers: ${decimalToHexTransparency($('#bg-servers-slider').slider('get value'), $('#bg-servers').val())};\n`
        config += `    --bg-ui: ${decimalToHexTransparency($('#bg-ui-slider').slider('get value'), $('#bg-ui').val())};\n`
        config += `    --bg-ui-elements: ${decimalToHexTransparency($('#bg-ui-elements-slider').slider('get value'), $('#bg-ui-elements').val())};\n`
        config += `    --bg-chatbox: ${decimalToHexTransparency($('#bg-chatbox-slider').slider('get value'), $('#bg-chatbox').val())};\n`

        config += `    --bg-sendmessage: ${decimalToHexTransparency($('#bg-sendmessage-slider').slider('get value'), $('#bg-sendmessage').val())};\n`
        config += `    --bg-members: ${decimalToHexTransparency($('#bg-members-slider').slider('get value'), $('#bg-members').val())};\n`
        config += `    --bg-chat-elements: ${decimalToHexTransparency($('#bg-chat-elements-slider').slider('get value'), $('#bg-chat-elements').val())};\n`
        config += `    --bg-user-area: ${decimalToHexTransparency($('#bg-user-area-slider').slider('get value'), $('#bg-user-area').val())};\n`
        config += `    --bg-settings: ${decimalToHexTransparency($('#bg-settings-slider').slider('get value'), $('#bg-settings').val())};\n`
        config += `    --bg-colorprofile: ${decimalToHexTransparency($('#bg-colorprofile-slider').slider('get value'), $('#bg-colorprofile').val())};\n`
        config += `    --bg-alt-message: ${decimalToHexTransparency($('#bg-alt-message-slider').slider('get value'), $('#bg-alt-message').val())};\n`

        if (CONFIG.background_type === 'color') {
            config += `    --background: ${$('#backgroundColor').val()};\n`;
        } else if (CONFIG.background_type === 'custom') {
            config += `    --background: url("${$('#backgroundCustomUrl').val()}");\n`;
        } else {
            config += `    --background: url("${GLOBALS.backgrounds[$('#backgroundImage').val()].url}");\n`;
        }

        config += `\n    /* RGB */\n`
        config += `    --ColorTime: ${$('#rgb-speed-slider').slider('get value')}s;\n`
        config += `    --Color2: ${$('#rgb-color-2').val()};\n`
        config += `    --Color3: ${$('#rgb-color-3').val()};\n`
        config += `    --Color4: ${$('#rgb-color-4').val()};\n`
        config += `    --Color5: ${$('#rgb-color-5').val()};\n`
        config += `    --Color6: ${$('#rgb-color-6').val()};\n`
        config += `    --Color7: ${$('#rgb-color-7').val()};\n`
        config += `    --Color8: ${$('#rgb-color-8').val()};\n`
        config += `    --Color9: ${$('#rgb-color-9').val()};\n`
        config += `    --Color10: ${$('#rgb-color-10').val()};\n`

        config += `\n    /* EMB */\n`
        config += `    --BackgroundTime: ${$('#emb-speed-slider').slider('get value')}s;\n`

        for (var i = 2; i <= 10; i++) {
            if (CONFIG[`EMB_${i}_type`] === 'color') {
                config += `    --EMB_${i - 1}: ${$('#EMB_' + i + '_Color').val()};\n`;
            } else if (CONFIG[`EMB_${i}_type`] === 'custom') {
                config += `    --EMB_${i - 1}: url("${$('#EMB_' + i + '_CustomUrl').val()}");\n`;
            } else {
                config += `    --EMB_${i - 1}: url("${GLOBALS.backgrounds[$('#EMB_' + i + '_Image').val()].url}");\n`;
            }
        }

        config += `\n    /* MISCS */\n`
        config += `    --ServerSize: ${$("#server-size-slider").slider("get value")}px;\n`;
        if (CONFIG.pill_color_type === 'custom') {
            config += `    --ServerPills: ${$('#Pill-Custom-Color').val()};\n`;
        } else {
            config += `    --ServerPills: var(--Primary);\n`;
        }

        if (CONFIG.folders_color_type === 'custom') {
            config += `    --ServerFoldersColor: ${$('#Servers-Custom-Color').val()};\n`;
        } else {
            config += `    --ServerFoldersColor: var(--Primary);\n`;
        }

        config += `    --Rounding: ${rounding_values[$('#Rounding .checkbox.checked>input').val()]};\n`;
        config += `    --AvatarRounding: ${rounding_values[$('#AvatarRounding .checkbox.checked>input').val()]};\n`;
        config += `    --Show_Gift_Button: ${$('#showGiftButton').val()};\n`;
        config += `    --Show_GIF_Button: ${$('#showGIFButton').val()};\n`;
        config += `    --Show_Sticker_Button: ${$('#showStickerButton').val()};\n`;
        config += `    --Show_Apps_Button: ${$('#showAppsButton').val()};\n`;
        config += `    --Show_Now_Playing_Tab: ${$('#showNowPlayingTab').val()};\n`;
        config += `    --Show_Category_Visibility_Icon: ${$('#showCategoryVisibilityIcon').val()};\n`;

        config += "}\n";
        config += `\n\n/* Theme generated using WizardUI Theme Generator v${GLOBALS.VERSION} */`;

        $('#output').html(`<pre>${config}</pre>`);
        $('#download').removeClass('disabled');
    }));
    $('#download').on('click', download);
    $('#themeImporter').on('change', importTheme);
});


{
    console.log("#---------------Capitalize");
    const template = 'привет Мир';

    const capitalize = text => {
    return text[0].toUpperCase() + text.substring(1);
    }

    console.log(`${template} => ${capitalize(template)}`);
}
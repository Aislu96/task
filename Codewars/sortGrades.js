// Моя пятая ката и первая в запланированной серии ката на тему скалолазания.
//
//     В скалолазании ( в частности, в боулдеринге ) уровни скалолазания V/Vermin (США) начинаются с 'VB'(самого легкого уровня), а затем идут от 'V0', 'V0+', 'V1', 'V2', 'V3', 'V4'и 'V5'т. д. до 'V17'(самого сложного уровня). Вам будет дана list( lst) оценок за восхождение, и вам нужно будет написать функцию ( sort_grades) для returnодной listиз оценок, отсортированных от самой легкой до самой сложной.
//
//     Если входной параметр пуст list, returnпусто list; в противном случае входные данные всегда будут действительными listдля одной или нескольких оценок.
//
//     Пожалуйста, голосуйте, оценивайте и оставляйте отзывы о ката.

function sortGrades(lst) {
    lst.sort((a, b) => {
        if (a == 'VB') a = 'V-1';
        if (b == 'VB') b = 'V-1';
        if (
            parseInt(a.slice(1)) > parseInt(b.slice(1))
        ) {
            return 1;
        } else if (parseInt(a.slice(1)) < parseInt(b.slice(1))) {
            return -1;
        } else {
            return a.length - b.length;
        }
    });
    return lst;
}

sortGrades(["V0+", "V0", "V16", "V2", "VB", "V6"]);
sortGrades(["V13", "V14", "VB", "V0"]);
sortGrades(["V7", "V12", "V1"]);
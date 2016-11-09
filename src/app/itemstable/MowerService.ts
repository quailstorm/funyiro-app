import { Mower } from './mower';

export function Mowerclass(sortType) {
    this.constructor;

    const MOWERS: Mower[] = [
        { id: 11, image_of: 'kép', brandof_mower: "Makita", name: 'PLM4120N', typeof_mower: "benzinmotoros", color_of: "Türkiz", weight_in_kg: 12, performance_in_hp: 3, cutting_width_cm: 41 },
        { id: 12, image_of: 'kép', brandof_mower: "MTD", name: ' OPTIMA LF 145 H', typeof_mower: "fűnyíró traktor", color_of: "Vörös", weight_in_kg: 150, performance_in_hp: 15, cutting_width_cm: 96 },
        { id: 13, image_of: 'kép', brandof_mower: "MTD", name: 'OPTIMA LG 200 H', typeof_mower: "fűnyíró traktor", color_of: "Vörös", weight_in_kg: 175, performance_in_hp: 19.5, cutting_width_cm: 107 },
        { id: 14, image_of: 'kép', brandof_mower: "MTD", name: 'SMART 38 E', typeof_mower: "elektromos", color_of: "Vörös", weight_in_kg: 7.5, performance_in_hp: 1, cutting_width_cm: 32 },
        { id: 15, image_of: 'kép', brandof_mower: "Kecske", name: 'Ms. Kecskovici', typeof_mower: "biofűnyíró", color_of: "tarka", weight_in_kg: 19, performance_in_hp: 0.5, cutting_width_cm: 10 },
        { id: 16, image_of: 'kép', brandof_mower: "Makita", name: 'PLM4120N', typeof_mower: "benzinmotoros", color_of: "Yellow", weight_in_kg: 12, performance_in_hp: 3, cutting_width_cm: 80 },
        { id: 17, image_of: 'kép', brandof_mower: "Makita", name: 'PLM4120N', typeof_mower: "benzinmotoros", color_of: "Yellow", weight_in_kg: 12, performance_in_hp: 3, cutting_width_cm: 80 },

    ];

    if (sortType == "brandAsc") {
        MOWERS.sort(comparebrandAsc);
    }
    else if (sortType == "brandDesc"){
        MOWERS.sort(comparebrandDesc);
    }
        else if (sortType == "nameAsc"){
        MOWERS.sort(comparenameAsc);
    }
        else if (sortType == "nameDesc"){
        MOWERS.sort(comparenameDesc);
    }
        else if (sortType == "weightAsc"){
        MOWERS.sort(compareweightAsc);
    }
        else if (sortType == "weightDesc"){
        MOWERS.sort(compareweightDesc);
    }
        else if (sortType == "powerAsc"){
        MOWERS.sort(comparepowerAsc);
    }
        else if (sortType == "powerDesc"){
        MOWERS.sort(comparepowerDesc);
    }




    this.getMowers = function () {
        return MOWERS;
    }

    function comparebrandAsc(a, b) {
        var astr = new String(a.brandof_mower);
        var bstr = new String(b.brandof_mower);
        var ares = astr.toLowerCase();
        var bres = bstr.toLowerCase();
        if (ares < bres)
            return -1;
        if (ares > bres)
            return 1;
        return 0;
    }

    function comparenameAsc(a, b) {
        var astr = new String(a.name);
        var bstr = new String(b.name);
        var ares = astr.toLowerCase();
        var bres = bstr.toLowerCase();
        if (ares < bres)
            return -1;
        if (ares > bres)
            return 1;
        return 0;
    }

    function compareweightAsc(a, b) {
        if (a.weight_in_kg < b.weight_in_kg)
            return -1;
        if (a.weight_in_kg > b.weight_in_kg)
            return 1;
        return 0;
    }

    function comparepowerAsc(a, b) {
        if (a.performance_in_hp < b.performance_in_hp)
            return -1;
        if (a.performance_in_hp > b.performance_in_hp)
            return 1;
        return 0;
    }








    function comparebrandDesc(a, b) {
        var astr = new String(a.brandof_mower);
        var bstr = new String(b.brandof_mower);
        var ares = astr.toLowerCase();
        var bres = bstr.toLowerCase();
        if (ares < bres)
            return 1;
        if (ares > bres)
            return -1;
        return 0;
    }

    function comparenameDesc(a, b) {
        var astr = new String(a.name);
        var bstr = new String(b.name);
        var ares = astr.toLowerCase();
        var bres = bstr.toLowerCase();
        if (ares < bres)
            return 1;
        if (ares > bres)
            return -1;
        return 0;
    }

    function compareweightDesc(a, b) {
        if (a.weight_in_kg < b.weight_in_kg)
            return 1;
        if (a.weight_in_kg > b.weight_in_kg)
            return -1;
        return 0;
    }

    function comparepowerDesc(a, b) {
        if (a.performance_in_hp < b.performance_in_hp)
            return 1;
        if (a.performance_in_hp > b.performance_in_hp)
            return -1;
        return 0;
    }

}
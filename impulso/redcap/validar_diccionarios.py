#!/usr/bin/env python3
"""Estructura REDCap y puerta de acceso. No accede a ninguna instancia real."""
from __future__ import annotations
import csv
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent
BASE = ROOT / "diccionario_loja_redcap.csv"
EXT = ROOT / "diccionario_loja_redcap_con_contacto_PENDIENTE.csv"
HEADERS = [
    "Variable / Field Name", "Form Name", "Section Header", "Field Type",
    "Field Label", "Choices, Calculations, OR Slider Labels", "Field Note",
    "Text Validation Type OR Show Slider Number", "Text Validation Min",
    "Text Validation Max", "Identifier?",
    "Branching Logic (Show field only if...)", "Required Field?",
    "Custom Alignment", "Question Number (surveys only)",
    "Matrix Group Name", "Matrix Ranking?", "Field Annotation",
]
def read(path):
    with path.open(newline="", encoding="utf-8-sig") as f:
        rows=list(csv.reader(f))
    assert rows[0] == HEADERS, f"{path}: cabeceras REDCap incorrectas"
    assert all(len(r) == 18 for r in rows), f"{path}: se requieren 18 columnas"
    assert all(len(r) == 18 for r in rows[1:]), f"{path}: filas truncadas"
    d={r[0]:r for r in rows[1:]}
    assert len(d)==len(rows)-1, f"{path}: campos duplicados"
    assert all(re.fullmatch(r"[a-z][a-z0-9_]{0,25}",n) for n in d), f"{path}: nombres inválidos"
    assert all(r[1]=="encuesta_actores_loja" for r in rows[1:]), f"{path}: distintos formularios"
    assert rows[1][0]=="record_id", f"{path}: el primer campo ha de ser record_id"
    return d
def choices(row):
    parts=[p.strip() for p in row[5].split("|")]
    return {int(p.split(",",1)[0]):p.split(",",1)[1].strip() for p in parts}
a=read(BASE); b=read(EXT)
assert len(a)==13 and len(b)==20
assert list(b)[:13]==list(a)
assert all(b[n]==v for n,v in a.items())
for field,number,last in [
 ("sector",26,"Otro sector"),
 ("tipo_actor",13,"Otro tipo de actor"),
 ("ambito",7,"Otro ámbito"),
 ("vinculo",7,"Prefiero no indicarlo"),
]:
    c=choices(a[field])
    assert list(c)==list(range(1,number+1)) and c[number]==last, field
for field,parent,number in [
 ("sector_otro","sector",26), ("tipo_otro","tipo_actor",13),("ambito_otro","ambito",7)
]:
    assert a[field][11]==f"[{parent}] = '{number}'" and a[field][12]=="y"
for f in ["sector","tipo_actor","ambito","participacion"]:
    assert a[f][12]=="y",f
for f in ["record_id","instrucciones"]:
    assert a[f][10]=="" and a[f][12]==""
for f in ["contacto_nombre","contacto_email","contacto_telefono"]:
    assert f not in a and b[f][10]=="y", f
assert b["contacto_aviso"][4].find("ANTES DE PUBLICAR")>=0
assert a["record_id"][17]=="@HIDDEN-SURVEY"
assert a["funcion"][17]=="@CHARLIMIT=500"
assert a["grupo"][17]=="@CHARLIMIT=220"
page=(ROOT.parent/"ficha.html").read_text(encoding="utf-8")
assert "firebase" not in page.lower() and "firestore" not in page.lower()
assert "redcap/config-encuesta.js" in page
assert "window.LOJA_REDCAP_PUBLIC_URL" in page
cfg=(ROOT/"config-encuesta.js").read_text(encoding="utf-8")
assert re.search(r'LOJA_REDCAP_PUBLIC_URL\s*=\s*""',cfg), "No debe inventarse el enlace público"
print("VALIDACIÓN OK: 13+20 campos, 18 columnas, menús 26/13/7/7, lógica Otro, contacto separado, acceso sin Firebase.")

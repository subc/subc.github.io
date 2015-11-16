# -*- coding: utf-8 -*-
from __future__ import absolute_import, unicode_literals
import sys


def binary_reverse(i):
    b = [int(_x) for _x in format(i, 'b')]  # 2進数のリストに変換
    b.reverse()  # リスト反転
    return int(''.join([str(_x) for _x in b]), 2)  # リストを文字列に変換してから10進数に変換


def main(argv=None):
    l = sys.stdin.readline()
    print binary_reverse(int(l))

main()

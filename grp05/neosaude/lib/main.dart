import 'package:flutter/material.dart';

import 'pages/atendimento_comum_page.dart';
import 'pages/atendimento_prioritario_page.dart';
import 'pages/home_page.dart';
import 'pages/retirar_exame_page.dart';

void main() {
  runApp(const App());
}

class App extends StatelessWidget {
  const App({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: "NeoSaúde",
      initialRoute: "/home",
      routes: {
        "/home": (context) => const HomePage(),
        "/retirarExame": (context) => const RetirarExamePage(),
        "/atendimentoComum": (context) => const AtendimentoComum(),
        "/atendimentoPrioritario": (context) => const AtendimentoPrioritario(),
      },
    );
  }
}

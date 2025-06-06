import { Link } from 'react-router-dom';
import { MapPin, Clock, Utensils } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

export default function Footer() {
  const { isDarkMode } = useTheme();

  return (
    <footer className={`${isDarkMode ? 'bg-[#1a0f0a]' : 'bg-[#1A1A2E]'} text-gray-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <div className="flex items-center space-x-2 mb-3">
              <Utensils className="w-6 h-6 text-orange-500" />
              <span className="text-xl font-bold text-orange-500">Cantinho do Sabor</span>
            </div>
            <p className="text-sm max-w-xs">
              Lanches frescos e saborosos para alimentar seu corpo e mente durante a jornada acadêmica.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Links Rápidos</h3>
            <ul className="space-y-1">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/cardapio" className="text-gray-400 hover:text-white transition-colors">
                  Cardápio
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Horário de Funcionamento</h3>
            <div className="space-y-1">
              <div className="flex justify-between">
                <span>Segunda a Sexta</span>
                <span>7h às 22h</span>
              </div>
              <div className="flex justify-between">
                <span>Sábado</span>
                <span>8h às 14h</span>
              </div>
              <div className="flex justify-between">
                <span>Domingo</span>
                <span>Fechado</span>
              </div>
              <div className="flex justify-between">
                <span>Período de Férias</span>
                <span>Horários Especiais</span>
              </div>
            </div>

            <h3 className="text-lg font-semibold mt-4 mb-2">Localização</h3>
            <div className="flex items-start space-x-2">
              <MapPin className="w-5 h-5 text-orange-500 mt-0.5" />
              <span>
                Universidade Anhanguera de Osasco - Próximo ao Auditório
              </span>
            </div>
          </div>
        </div>

        <div className={`border-t ${isDarkMode ? 'border-[#2a211c]' : 'border-gray-800'} mt-6 pt-4 flex flex-col md:flex-row justify-between items-center`}>
          <p className="text-sm text-gray-500">
            © 2025 Cantinho do Sabor. Todos os direitos reservados.
          </p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <Link to="/termos" className="text-sm text-gray-500 hover:text-white transition-colors">
              Termos de Uso
            </Link>
            <Link to="/privacidade" className="text-sm text-gray-500 hover:text-white transition-colors">
              Política de Privacidade
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
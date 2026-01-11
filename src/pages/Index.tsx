import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');

  const stats = [
    { label: 'Всего заказов', value: '245', change: '+12%', icon: 'ShoppingCart' },
    { label: 'Выручка', value: '₽1.2M', change: '+18%', icon: 'TrendingUp' },
    { label: 'Филиалов', value: '8', change: '+2', icon: 'Building2' },
    { label: 'Сотрудников', value: '42', change: '+5', icon: 'Users' },
  ];

  const recentOrders = [
    { id: '#1234', client: 'ООО "Альфа"', amount: '₽45,000', status: 'completed', date: '10.01.2026' },
    { id: '#1235', client: 'ИП Петров', amount: '₽12,500', status: 'processing', date: '11.01.2026' },
    { id: '#1236', client: 'ООО "Бета"', amount: '₽78,900', status: 'pending', date: '11.01.2026' },
  ];

  const products = [
    { id: 1, name: 'Консультация бизнес-аналитика', category: 'Услуги', price: '₽15,000', stock: '—' },
    { id: 2, name: 'Аудит процессов', category: 'Услуги', price: '₽45,000', stock: '—' },
    { id: 3, name: 'CRM система', category: 'Товары', price: '₽120,000', stock: '12' },
    { id: 4, name: 'Бизнес-план', category: 'Услуги', price: '₽25,000', stock: '—' },
  ];

  const branches = [
    { id: 1, name: 'Центральный офис', city: 'Москва', address: 'ул. Тверская, 10', staff: 15, status: 'active' },
    { id: 2, name: 'Филиал №1', city: 'Санкт-Петербург', address: 'Невский пр., 25', staff: 8, status: 'active' },
    { id: 3, name: 'Филиал №2', city: 'Казань', address: 'ул. Баумана, 5', staff: 6, status: 'active' },
  ];

  const users = [
    { id: 1, name: 'Иван Петров', role: 'Администратор', email: 'ivan@example.com', status: 'active' },
    { id: 2, name: 'Мария Сидорова', role: 'Менеджер', email: 'maria@example.com', status: 'active' },
    { id: 3, name: 'Алексей Иванов', role: 'Сотрудник', email: 'alex@example.com', status: 'active' },
  ];

  const getStatusBadge = (status: string) => {
    const variants: Record<string, string> = {
      completed: 'bg-green-100 text-green-800',
      processing: 'bg-blue-100 text-blue-800',
      pending: 'bg-yellow-100 text-yellow-800',
      active: 'bg-green-100 text-green-800',
    };
    return variants[status] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b bg-card shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Briefcase" className="text-primary-foreground" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">BizManager</h1>
              <p className="text-xs text-muted-foreground">Управление бизнесом</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Icon name="Bell" size={20} />
            </Button>
            <Avatar>
              <AvatarFallback className="bg-primary text-primary-foreground">АИ</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 pb-24">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-6 mb-6">
            <TabsTrigger value="home" className="flex flex-col gap-1 py-3">
              <Icon name="Home" size={20} />
              <span className="text-xs">Главная</span>
            </TabsTrigger>
            <TabsTrigger value="catalog" className="flex flex-col gap-1 py-3">
              <Icon name="Package" size={20} />
              <span className="text-xs">Каталог</span>
            </TabsTrigger>
            <TabsTrigger value="reports" className="flex flex-col gap-1 py-3">
              <Icon name="BarChart3" size={20} />
              <span className="text-xs">Отчеты</span>
            </TabsTrigger>
            <TabsTrigger value="branches" className="flex flex-col gap-1 py-3">
              <Icon name="Building2" size={20} />
              <span className="text-xs">Филиалы</span>
            </TabsTrigger>
            <TabsTrigger value="admin" className="flex flex-col gap-1 py-3">
              <Icon name="Shield" size={20} />
              <span className="text-xs">Админ</span>
            </TabsTrigger>
            <TabsTrigger value="profile" className="flex flex-col gap-1 py-3">
              <Icon name="User" size={20} />
              <span className="text-xs">Профиль</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="home" className="space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between mb-2">
                      <Icon name={stat.icon as any} className="text-primary" size={24} />
                      <Badge variant="secondary" className="text-xs">{stat.change}</Badge>
                    </div>
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Последние заказы</CardTitle>
                <CardDescription>Активность за сегодня</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentOrders.map((order) => (
                    <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <Icon name="FileText" className="text-primary" size={20} />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{order.client}</p>
                          <p className="text-sm text-muted-foreground">{order.id} • {order.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-foreground">{order.amount}</p>
                        <Badge className={`mt-1 ${getStatusBadge(order.status)}`}>
                          {order.status === 'completed' && 'Выполнен'}
                          {order.status === 'processing' && 'В работе'}
                          {order.status === 'pending' && 'Ожидает'}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="catalog" className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-foreground">Каталог</h2>
                <p className="text-muted-foreground">Управление товарами и услугами</p>
              </div>
              <Button className="gap-2">
                <Icon name="Plus" size={18} />
                Добавить
              </Button>
            </div>

            <div className="flex gap-4">
              <Input placeholder="Поиск по каталогу..." className="flex-1" />
              <Button variant="outline">
                <Icon name="Filter" size={18} />
              </Button>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {products.map((product) => (
                <Card key={product.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{product.name}</CardTitle>
                        <CardDescription>{product.category}</CardDescription>
                      </div>
                      <Badge variant="outline">{product.stock === '—' ? 'Услуга' : `Склад: ${product.stock}`}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <p className="text-2xl font-bold text-primary">{product.price}</p>
                      <div className="flex gap-2">
                        <Button variant="outline" size="icon">
                          <Icon name="Pencil" size={16} />
                        </Button>
                        <Button variant="outline" size="icon">
                          <Icon name="Trash2" size={16} />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="reports" className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-foreground">Отчеты</h2>
              <p className="text-muted-foreground">Аналитика и статистика</p>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Выручка за месяц</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-primary">₽1,245,000</p>
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">План</span>
                      <span className="font-medium">₽1,000,000</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: '124%' }}></div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Заказов выполнено</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-green-600">245</p>
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">В работе</span>
                      <span className="font-medium">18</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Ожидают</span>
                      <span className="font-medium">7</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Средний чек</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-primary">₽5,082</p>
                  <p className="text-sm text-green-600 mt-2 flex items-center gap-1">
                    <Icon name="TrendingUp" size={16} />
                    +15% к прошлому месяцу
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>График продаж</CardTitle>
                <CardDescription>Динамика за последние 7 дней</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-end justify-between gap-2">
                  {[65, 78, 90, 45, 88, 92, 100].map((height, idx) => (
                    <div key={idx} className="flex-1 bg-primary/20 rounded-t-lg hover:bg-primary/40 transition-colors relative group" style={{ height: `${height}%` }}>
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                        ₽{(height * 1500).toLocaleString()}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between mt-4 text-xs text-muted-foreground">
                  <span>Пн</span>
                  <span>Вт</span>
                  <span>Ср</span>
                  <span>Чт</span>
                  <span>Пт</span>
                  <span>Сб</span>
                  <span>Вс</span>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="branches" className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-foreground">Филиалы</h2>
                <p className="text-muted-foreground">Управление офисами и точками</p>
              </div>
              <Button className="gap-2">
                <Icon name="Plus" size={18} />
                Добавить филиал
              </Button>
            </div>

            <div className="space-y-4">
              {branches.map((branch) => (
                <Card key={branch.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between">
                      <div className="flex gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Icon name="Building2" className="text-primary" size={24} />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg text-foreground">{branch.name}</h3>
                          <p className="text-sm text-muted-foreground">{branch.city}</p>
                          <p className="text-sm text-muted-foreground mt-1">{branch.address}</p>
                          <div className="flex items-center gap-4 mt-3">
                            <div className="flex items-center gap-2 text-sm">
                              <Icon name="Users" size={16} className="text-muted-foreground" />
                              <span>{branch.staff} сотрудников</span>
                            </div>
                            <Badge className={getStatusBadge(branch.status)}>Активен</Badge>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="icon">
                          <Icon name="Pencil" size={16} />
                        </Button>
                        <Button variant="outline" size="icon">
                          <Icon name="Trash2" size={16} />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="admin" className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-foreground">Администрирование</h2>
              <p className="text-muted-foreground">Управление пользователями и правами доступа</p>
            </div>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Пользователи системы</CardTitle>
                  <Button className="gap-2">
                    <Icon name="UserPlus" size={18} />
                    Добавить
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {users.map((user) => (
                    <div key={user.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="flex items-center gap-4">
                        <Avatar>
                          <AvatarFallback className="bg-primary text-primary-foreground">
                            {user.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-foreground">{user.name}</p>
                          <p className="text-sm text-muted-foreground">{user.email}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <Badge variant="outline">{user.role}</Badge>
                        <Switch defaultChecked={user.status === 'active'} />
                        <Button variant="outline" size="icon">
                          <Icon name="Settings" size={16} />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Роли и права доступа</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { role: 'Администратор', permissions: 'Полный доступ ко всем разделам' },
                    { role: 'Менеджер', permissions: 'Каталог, Заказы, Отчеты, Клиенты' },
                    { role: 'Сотрудник', permissions: 'Просмотр каталога и заказов' },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-medium text-foreground">{item.role}</p>
                        <p className="text-sm text-muted-foreground">{item.permissions}</p>
                      </div>
                      <Button variant="ghost" size="icon">
                        <Icon name="Edit" size={16} />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="profile" className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-foreground">Профиль</h2>
              <p className="text-muted-foreground">Личные настройки и данные</p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Личная информация</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                  <Avatar className="w-20 h-20">
                    <AvatarFallback className="bg-primary text-primary-foreground text-2xl">АИ</AvatarFallback>
                  </Avatar>
                  <Button variant="outline">Изменить фото</Button>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-foreground">Имя</label>
                    <Input placeholder="Иван Петров" className="mt-1" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground">Email</label>
                    <Input placeholder="ivan@example.com" type="email" className="mt-1" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground">Телефон</label>
                    <Input placeholder="+7 (999) 123-45-67" className="mt-1" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground">Должность</label>
                    <Input placeholder="Администратор" className="mt-1" />
                  </div>
                </div>
                <Button className="w-full">Сохранить изменения</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Уведомления</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-foreground">SMS-уведомления</p>
                    <p className="text-sm text-muted-foreground">О статусе заказов и важных событиях</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-foreground">Email-уведомления</p>
                    <p className="text-sm text-muted-foreground">Еженедельные отчеты</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-foreground">Push-уведомления</p>
                    <p className="text-sm text-muted-foreground">Важные обновления в системе</p>
                  </div>
                  <Switch />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Безопасность</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="outline" className="w-full justify-start gap-2">
                  <Icon name="Lock" size={18} />
                  Изменить пароль
                </Button>
                <Button variant="outline" className="w-full justify-start gap-2">
                  <Icon name="Smartphone" size={18} />
                  Двухфакторная аутентификация
                </Button>
                <Button variant="outline" className="w-full justify-start gap-2 text-destructive">
                  <Icon name="LogOut" size={18} />
                  Выйти из системы
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;

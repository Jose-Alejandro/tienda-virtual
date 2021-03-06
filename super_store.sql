USE [master]
GO
/****** Object:  Database [super_store]    Script Date: 10/08/2021 04:46:06 a. m. ******/
CREATE DATABASE [super_store]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'super_store', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\super_store.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'super_store_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\super_store_log.ldf' , SIZE = 73728KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [super_store] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [super_store].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [super_store] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [super_store] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [super_store] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [super_store] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [super_store] SET ARITHABORT OFF 
GO
ALTER DATABASE [super_store] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [super_store] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [super_store] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [super_store] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [super_store] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [super_store] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [super_store] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [super_store] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [super_store] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [super_store] SET  ENABLE_BROKER 
GO
ALTER DATABASE [super_store] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [super_store] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [super_store] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [super_store] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [super_store] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [super_store] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [super_store] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [super_store] SET RECOVERY FULL 
GO
ALTER DATABASE [super_store] SET  MULTI_USER 
GO
ALTER DATABASE [super_store] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [super_store] SET DB_CHAINING OFF 
GO
ALTER DATABASE [super_store] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [super_store] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [super_store] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [super_store] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
EXEC sys.sp_db_vardecimal_storage_format N'super_store', N'ON'
GO
ALTER DATABASE [super_store] SET QUERY_STORE = OFF
GO
USE [super_store]
GO
/****** Object:  Table [dbo].[orders]    Script Date: 10/08/2021 04:46:06 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[orders](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[delivery_date] [nvarchar](50) NULL,
	[createdAt] [datetimeoffset](7) NOT NULL,
	[updatedAt] [datetimeoffset](7) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[products]    Script Date: 10/08/2021 04:46:06 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[products](
	[id_product] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](100) NOT NULL,
	[price] [decimal](10, 2) NOT NULL,
	[description] [nvarchar](255) NOT NULL,
	[image] [nvarchar](100) NOT NULL,
	[category] [nvarchar](100) NOT NULL,
	[qualification] [int] NOT NULL,
	[brand] [char](20) NOT NULL,
	[origin] [char](20) NOT NULL,
	[stock] [int] NOT NULL,
	[active] [bit] NOT NULL,
	[createdAt] [datetimeoffset](7) NOT NULL,
	[updatedAt] [datetimeoffset](7) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[id_product] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[user_orders]    Script Date: 10/08/2021 04:46:06 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[user_orders](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[order_id] [nvarchar](50) NOT NULL,
	[product_id] [nvarchar](50) NOT NULL,
	[email] [nvarchar](50) NOT NULL,
	[selling_price] [nvarchar](50) NOT NULL,
	[quantity] [nvarchar](50) NOT NULL,
	[createdAt] [datetimeoffset](7) NOT NULL,
	[updatedAt] [datetimeoffset](7) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[users]    Script Date: 10/08/2021 04:46:06 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[users](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[names] [nvarchar](50) NOT NULL,
	[last_names] [nvarchar](50) NOT NULL,
	[email] [nvarchar](50) NOT NULL,
	[userName] [nvarchar](10) NOT NULL,
	[phone_number] [nvarchar](15) NOT NULL,
	[password] [nvarchar](15) NOT NULL,
	[billing_address] [nvarchar](30) NOT NULL,
	[delivery_address] [nvarchar](30) NOT NULL,
	[active] [nvarchar](15) NOT NULL,
	[role] [nvarchar](15) NOT NULL,
	[createdAt] [datetimeoffset](7) NOT NULL,
	[updatedAt] [datetimeoffset](7) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[orders] ON 

INSERT [dbo].[orders] ([id], [delivery_date], [createdAt], [updatedAt]) VALUES (1, NULL, CAST(N'2021-08-10T09:42:24.5780000+00:00' AS DateTimeOffset), CAST(N'2021-08-10T09:42:24.5780000+00:00' AS DateTimeOffset))
SET IDENTITY_INSERT [dbo].[orders] OFF
GO
SET IDENTITY_INSERT [dbo].[products] ON 

INSERT [dbo].[products] ([id_product], [name], [price], [description], [image], [category], [qualification], [brand], [origin], [stock], [active], [createdAt], [updatedAt]) VALUES (3, N'Targeta de video 1050', CAST(4500.00 AS Decimal(10, 2)), N'Targeta de vide 4gb ram dd4', N'./assets/img/video145.jpg', N'gpu', 8, N'Nvidia              ', N'local               ', 4, 1, CAST(N'2021-08-09T19:29:36.6420000+00:00' AS DateTimeOffset), CAST(N'2021-08-10T00:17:27.7680000+00:00' AS DateTimeOffset))
INSERT [dbo].[products] ([id_product], [name], [price], [description], [image], [category], [qualification], [brand], [origin], [stock], [active], [createdAt], [updatedAt]) VALUES (4, N'Mouse Dell', CAST(700.00 AS Decimal(10, 2)), N'Mouse color negro ', N'./assets/img/mouseDell.jpg', N'mouse', 9, N'Dell                ', N'local               ', 4, 1, CAST(N'2021-08-09T19:33:20.8170000+00:00' AS DateTimeOffset), CAST(N'2021-08-09T19:33:20.8170000+00:00' AS DateTimeOffset))
SET IDENTITY_INSERT [dbo].[products] OFF
GO
SET IDENTITY_INSERT [dbo].[user_orders] ON 

INSERT [dbo].[user_orders] ([id], [order_id], [product_id], [email], [selling_price], [quantity], [createdAt], [updatedAt]) VALUES (1, N'1', N'4', N'Alfred48@gmail.com', N'700', N'1', CAST(N'2021-08-10T09:42:24.5910000+00:00' AS DateTimeOffset), CAST(N'2021-08-10T09:42:24.5910000+00:00' AS DateTimeOffset))
INSERT [dbo].[user_orders] ([id], [order_id], [product_id], [email], [selling_price], [quantity], [createdAt], [updatedAt]) VALUES (2, N'1', N'3', N'Alfred48@gmail.com', N'4500', N'1', CAST(N'2021-08-10T09:42:24.5970000+00:00' AS DateTimeOffset), CAST(N'2021-08-10T09:42:24.5970000+00:00' AS DateTimeOffset))
INSERT [dbo].[user_orders] ([id], [order_id], [product_id], [email], [selling_price], [quantity], [createdAt], [updatedAt]) VALUES (3, N'1', N'MLM856095159', N'Alfred48@gmail.com', N'3999', N'1', CAST(N'2021-08-10T09:42:24.6020000+00:00' AS DateTimeOffset), CAST(N'2021-08-10T09:42:24.6020000+00:00' AS DateTimeOffset))
INSERT [dbo].[user_orders] ([id], [order_id], [product_id], [email], [selling_price], [quantity], [createdAt], [updatedAt]) VALUES (4, N'1', N'MLM909191259', N'Alfred48@gmail.com', N'13399', N'1', CAST(N'2021-08-10T09:42:24.6070000+00:00' AS DateTimeOffset), CAST(N'2021-08-10T09:42:24.6070000+00:00' AS DateTimeOffset))
SET IDENTITY_INSERT [dbo].[user_orders] OFF
GO
SET IDENTITY_INSERT [dbo].[users] ON 

INSERT [dbo].[users] ([id], [names], [last_names], [email], [userName], [phone_number], [password], [billing_address], [delivery_address], [active], [role], [createdAt], [updatedAt]) VALUES (1, N'Guillermo', N'Ortega Vargas', N'guiller@hotmail.com', N'Guille', N'28056987', N'Mimpha', N'Cruces 9 int 3 5660', N'Padierna 4 mz 7 10330', N'true', N'admin', CAST(N'2021-08-09T05:27:54.4250000+00:00' AS DateTimeOffset), CAST(N'2021-08-09T05:27:54.4250000+00:00' AS DateTimeOffset))
INSERT [dbo].[users] ([id], [names], [last_names], [email], [userName], [phone_number], [password], [billing_address], [delivery_address], [active], [role], [createdAt], [updatedAt]) VALUES (4, N'Mariana Ximena', N'Maturino', N'Kina45@gmail.com', N'Kina76', N'5558103098', N'Xime', N'La era 18 mz4', N'La era 18 mz4', N'true', N'user', CAST(N'2021-08-09T15:23:33.1280000+00:00' AS DateTimeOffset), CAST(N'2021-08-09T15:23:33.1280000+00:00' AS DateTimeOffset))
INSERT [dbo].[users] ([id], [names], [last_names], [email], [userName], [phone_number], [password], [billing_address], [delivery_address], [active], [role], [createdAt], [updatedAt]) VALUES (5, N'Alfredo', N'Domiguez', N'Alfred48@gmail.com', N'Alfred', N'5558106098', N'Pass', N'Direccion 1', N'Direccion 2', N'true', N'user', CAST(N'2021-08-09T16:34:03.2440000+00:00' AS DateTimeOffset), CAST(N'2021-08-09T16:34:03.2440000+00:00' AS DateTimeOffset))
SET IDENTITY_INSERT [dbo].[users] OFF
GO
USE [master]
GO
ALTER DATABASE [super_store] SET  READ_WRITE 
GO
